// Use the value below whenever you need the value of Pi
const PI = 3.14159;

const sphereVolume = function (radius) {
  const radiusCubed = radius ** 3;
  return (4 / 3) * PI * radiusCubed;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  const radiusSquared = radius ** 2;
  return (1 / 3) * PI * radiusSquared * height;
};

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  const baseArea = depth * width;
  return baseArea * height;
};

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let volume = 0;

  for (const solid in solids) {
    if (solids[solid].type === "sphere") {
      volume += sphereVolume(solids[solid].radius);
    } else if (solids[solid].type === "cone") {
      volume += coneVolume(solids[solid].height, solids[solid].height);
    } else if (solids[solid].type === "prism") {
      volume += prismVolume(
        solids[solid].height,
        solids[solid].width,
        solids[solid].depth
      );
    }
  }
  return volume;
};

const largeSphere = {
  type: "sphere",
  radius: 40,
};

const smallSphere = {
  type: "sphere",
  radius: 10,
};

const cone = {
  type: "cone",
  radius: 3,
  height: 5,
};

const duck = [largeSphere, smallSphere, cone];

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);
