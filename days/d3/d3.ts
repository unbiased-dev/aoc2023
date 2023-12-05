const file = Bun.file("./days/d3/d3_input.txt");

const text = await file.text();

const partOne = () => {
  const lines = text.split("\n");
  let total = 0;
  lines.forEach((line, lineIndex) => {
    const numberMatches = [...line.matchAll(/[0-9]+/g)];
    numberMatches.forEach((match) => {
      let valuesAroundMatch: string[] = [];
      const matchEndIndex = match.index! + match.toString().length - 1;
      valuesAroundMatch.push(lines[lineIndex]?.[match.index! - 1]);
      valuesAroundMatch.push(lines[lineIndex]?.[matchEndIndex + 1]);
      for (let i = match.index! - 1; i <= matchEndIndex + 1; i++) {
        valuesAroundMatch.push(lines[lineIndex - 1]?.[i]);
        valuesAroundMatch.push(lines[lineIndex + 1]?.[i]);
      }
      const hasAtLeastOneSignAroundMatch = valuesAroundMatch.some((value) => /[^0-9.]+/g.test(value || ""));
      if (hasAtLeastOneSignAroundMatch) total += Number(match);
    });
  });
  console.log(total);
};

const partTwo = () => {
  const lines = text.split("\n");
  let hash: Record<string, number[]> = {};
  let total = 0;
  lines.forEach((line, lineIndex) => {
    const numberMatches = [...line.matchAll(/[0-9]+/g)];
    numberMatches.forEach((match) => {
      let valuesAndIndexesAroundMatch: string[][] = [];
      const matchEndIndex = match.index! + match.toString().length - 1;
      const left = [lines[lineIndex]?.[match.index! - 1], `${lineIndex}-${match.index! - 1}`];
      valuesAndIndexesAroundMatch.push(left);
      const right = [lines[lineIndex]?.[matchEndIndex + 1], `${lineIndex}-${matchEndIndex + 1}`];
      valuesAndIndexesAroundMatch.push(right);
      for (let i = match.index! - 1; i <= matchEndIndex + 1; i++) {
        valuesAndIndexesAroundMatch.push([lines[lineIndex - 1]?.[i], `${lineIndex - 1}-${i}`]);
        valuesAndIndexesAroundMatch.push([lines[lineIndex + 1]?.[i], `${lineIndex + 1}-${i}`]);
      }
      const starValuesAndIndexesAroundMatch = valuesAndIndexesAroundMatch.filter((pair) => pair[0] === "*");
      starValuesAndIndexesAroundMatch.forEach((pair) => {
        if (!hash[pair[1]]) hash[pair[1]] = [];
        hash[pair[1]].push(Number(match));
      });
    });
  });
  Object.keys(hash).forEach((hashIndex) => {
    const itemsAtHash = hash[hashIndex];
    if (itemsAtHash.length === 2) total += itemsAtHash[0] * itemsAtHash[1];
  });
  console.log(total);
};

partTwo();
