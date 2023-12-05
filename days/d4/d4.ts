const file = Bun.file("./days/d4/d4_input.txt");

const text = await file.text();

const calcPoints = (amount: number) => {
  if (amount === 0) return 0;
  if (amount === 1) return 1;
  let points = 1;
  for (let i = 1; i < amount; i++) {
    points = points * 2;
  }
  return points;
};

const partOne = () => {
  const lines = text.split("\n");
  let total = 0;
  lines.forEach((line, lineIndex) => {
    const [_cardMeta, plays] = line.split(":");
    const [winConditionPlaysString, myPlaysString] = plays.trim().split("|");
    const winConditionPlays = [...winConditionPlaysString.matchAll(/[0-9]+/g)].map((match) => match[0]);
    const myPlays = [...myPlaysString.matchAll(/[0-9]+/g)].map((match) => match[0]);
    const winningPlays = myPlays.filter((play) => winConditionPlays.includes(play));
    total += calcPoints(winningPlays.length);
  });
  console.log(total);
};

partOne();
