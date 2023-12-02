const file = Bun.file("./days/d2/d2_input.txt");

const text = await file.text();

type PullColors = {
  red: number;
  green: number;
  blue: number;
};

const totalInBag: PullColors = {
  red: 12,
  green: 13,
  blue: 14,
};

// PART ONE
console.log(
  text.split("\n").reduce((acc, cur) => {
    const [game, playsRaw] = cur.split(":");
    const gameId = game.split(" ")[1];
    const playsArray = playsRaw.split(";");
    const plays = playsArray.map((play) => play.trim().split(","));
    const maxOfPlay = plays.reduce(
      (acc, cur) => {
        cur.forEach((pull) => {
          const [amountString, color] = pull.trim().split(" ") as [string, keyof PullColors];
          const amount = Number(amountString);
          if (amount > acc[color]) acc[color] = amount;
        });
        return acc;
      },
      { red: 0, green: 0, blue: 0 }
    );
    if (
      maxOfPlay["red"] > totalInBag["red"] ||
      maxOfPlay["green"] > totalInBag["green"] ||
      maxOfPlay["blue"] > totalInBag["blue"]
    ) {
      return acc;
    }
    return acc + Number(gameId);
  }, 0)
);
