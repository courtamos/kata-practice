// given a sample set and a threshold, determine if the air is polluted or clean

const checkAir = function (samples, threshold) {
  let dirtyCount = 0;

  for (const sample in samples) {
    if (samples[sample] === "dirty") {
      dirtyCount++;
    }
  }

  if (dirtyCount / samples.length > threshold) {
    return "Polluted";
  }

  return "Clean";
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);
