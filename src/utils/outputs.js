module.exports.getBoardOutput = (
  guessList,
  totalLines,
  emptyGuess = {
    guess: ["_", "_", "_", "_"],
    score: { hit: 0, bullseye: 0 },
  },
) => {
  const separateLine = "+----+---------+-----------+\n";
  const line = "| {no} | {guess} | {score} |\n";
  let result = "";
  result += "\n\n\n";

  result += separateLine;

  let i = 0;
  while (i++ < totalLines) {
    const { guess, score } = guessList[i - 1] ?? emptyGuess;

    result += line
      .replace("{no}", String(i).padStart(2, "0"))
      .replace("{guess}", guess.join(" "))
      .replace("{score}", `H: ${score.hit} B: ${score.bullseye}`);

    result += separateLine;
  }

  result += "\n";

  return result;
};
