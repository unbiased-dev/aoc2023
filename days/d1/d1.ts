const file = Bun.file("./days/d1/d1_input.txt");

const text = await file.text();

// PART ONE
console.log(
  text.split("\n").reduce((acc, cur) => {
    let firstNum: number | undefined;
    let lastNum: number | undefined;
    for (let i = 0; i <= cur.length; i++) {
      const asNum = Number(cur[i]);
      if (isNaN(asNum)) continue;
      firstNum = asNum;
      break;
    }
    for (let i = 0; i <= cur.length; i++) {
      const asNum = Number(cur[cur.length - i]);
      if (isNaN(asNum)) continue;
      lastNum = asNum;
      break;
    }
    return acc + Number(`${firstNum}${lastNum}`);
  }, 0)
);

// PART TWO
console.log(
  text.split("\n").reduce((acc, cur) => {
    let firstNum: number | undefined;
    let lastNum: number | undefined;
    for (let i = 0; i <= cur.length; i++) {
      const asNum = Number(cur[i]);
      if (isNaN(asNum)) {
        if (["o", "t", "f", "s", "e", "n"].includes(cur[i])) {
          if (cur[i] === "o") {
            if (cur.slice(i, i + 3) === "one") {
              firstNum = 1;
              break;
            }
            continue;
          }
          if (cur[i] === "t") {
            if (cur.slice(i, i + 3) === "two") {
              firstNum = 2;
              break;
            }
            if (cur.slice(i, i + 5) === "three") {
              firstNum = 3;
              break;
            }
            continue;
          }
          if (cur[i] === "f") {
            if (cur.slice(i, i + 4) === "four") {
              firstNum = 4;
              break;
            }
            if (cur.slice(i, i + 4) === "five") {
              firstNum = 5;
              break;
            }
            continue;
          }
          if (cur[i] === "s") {
            if (cur.slice(i, i + 3) === "six") {
              firstNum = 6;
              break;
            }
            if (cur.slice(i, i + 5) === "seven") {
              firstNum = 7;
              break;
            }
            continue;
          }
          if (cur[i] === "e") {
            if (cur.slice(i, i + 5) === "eight") {
              firstNum = 8;
              break;
            }
            continue;
          }
          if (cur[i] === "n") {
            if (cur.slice(i, i + 4) === "nine") {
              firstNum = 9;
              break;
            }
            continue;
          }
        }
        continue;
      }
      firstNum = asNum;
      break;
    }
    for (let i = 0; i <= cur.length; i++) {
      const indexToCheck = cur.length - i;
      const asNum = Number(cur[indexToCheck]);
      if (isNaN(asNum)) {
        if (["e", "o", "x", "r", "n", "t"].includes(cur[indexToCheck])) {
          if (cur[indexToCheck] === "e") {
            if (cur.slice(indexToCheck - 2, indexToCheck + 1) === "one") {
              lastNum = 1;
              break;
            }
            if (cur.slice(indexToCheck - 4, indexToCheck + 1) === "three") {
              lastNum = 3;
              break;
            }
            if (cur.slice(indexToCheck - 3, indexToCheck + 1) === "five") {
              lastNum = 5;
              break;
            }
            if (cur.slice(indexToCheck - 3, indexToCheck + 1) === "nine") {
              lastNum = 9;
              break;
            }
            continue;
          }
          if (cur[indexToCheck] === "o") {
            if (cur.slice(indexToCheck - 2, indexToCheck + 1) === "two") {
              lastNum = 2;
              break;
            }
            continue;
          }
          if (cur[indexToCheck] === "x") {
            if (cur.slice(indexToCheck - 2, indexToCheck + 1) === "six") {
              lastNum = 6;
              break;
            }
            continue;
          }
          if (cur[indexToCheck] === "r") {
            if (cur.slice(indexToCheck - 3, indexToCheck + 1) === "four") {
              lastNum = 4;
              break;
            }
            continue;
          }
          if (cur[indexToCheck] === "n") {
            if (cur.slice(indexToCheck - 4, indexToCheck + 1) === "seven") {
              lastNum = 7;
              break;
            }
            continue;
          }
          if (cur[indexToCheck] === "t") {
            if (cur.slice(indexToCheck - 4, indexToCheck + 1) === "eight") {
              lastNum = 8;
              break;
            }
            continue;
          }
        }
        continue;
      }
      lastNum = asNum;
      break;
    }
    return acc + Number(`${firstNum}${lastNum}`);
  }, 0)
);
