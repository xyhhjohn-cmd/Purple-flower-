const plant = document.getElementById("plant");
const particles = document.getElementById("particles");

/*
  PURPLE FLOWER GARDEN
  --------------------
  The scene is generated with JavaScript so
  we can create many stems, leaves and flowers.
*/

let sceneNumber = 0;


/* --------------------------------
   PARTICLES
-------------------------------- */

function createParticles() {

  particles.innerHTML = "";

  for (let i = 0; i < 38; i++) {

    const p = document.createElement("div");

    p.className = "particle";

    p.style.left =
      Math.random() * 100 + "%";

    p.style.top =
      (35 + Math.random() * 55) + "%";

    p.style.setProperty(
      "--duration",
      (4 + Math.random() * 6) + "s"
    );

    p.style.setProperty(
      "--drift",
      (-30 + Math.random() * 60) + "px"
    );

    p.style.animationDelay =
      (-Math.random() * 7) + "s";

    particles.appendChild(p);
  }
}


/* --------------------------------
   SVG
-------------------------------- */

function createSVG() {

  const svg =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "svg"
    );

  svg.classList.add("stems");

  svg.setAttribute(
    "viewBox",
    "0 0 650 700"
  );

  svg.setAttribute(
    "preserveAspectRatio",
    "xMidYMax meet"
  );

  return svg;
}


/* --------------------------------
   STEM
-------------------------------- */

function createStem(
  svg,
  x1,
  y1,
  x2,
  y2,
  curve,
  delay,
  soft = false
) {

  const path =
    document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );

  const cx =
    (x1 + x2) / 2 + curve;

  const cy =
    (y1 + y2) / 2;

  const d =
    `M ${x1} ${y1}
     Q ${cx} ${cy}
       ${x2} ${y2}`;

  path.setAttribute("d", d);

  path.classList.add("stem-path");

  if (soft) {
    path.classList.add("soft");
  }

  path.style.animationDelay =
    delay + "s";

  svg.appendChild(path);

  return path;
}


/* --------------------------------
   FLOWER
-------------------------------- */

function createFlower(
  x,
  y,
  delay,
  scale = 1
) {

  const flower =
    document.createElement("div");

  flower.className = "flower";

  flower.style.left =
    (x / 650 * 100) + "%";

  flower.style.top =
    (y / 700 * 100) + "%";

  flower.style.animationDelay =
    delay + "s";

  flower.style.transformOrigin =
    "center center";

  flower.style.scale =
    scale;

  for (let i = 0; i < 5; i++) {

    const petal =
      document.createElement("div");

    petal.className = "petal";

    flower.appendChild(petal);
  }

  const center =
    document.createElement("div");

  center.className =
    "flower-center";

  flower.appendChild(center);

  plant.appendChild(flower);
}


/* --------------------------------
   LEAF
-------------------------------- */

function createLeaf(
  x,
  y,
  angle,
  delay,
  size = 1
) {

  const leaf =
    document.createElement("div");

  leaf.className = "leaf";

  leaf.style.left =
    (x / 650 * 100) + "%";

  leaf.style.top =
    (y / 700 * 100) + "%";

  leaf.style.scale =
    size;

  leaf.style.transform =
    `rotate(${angle}deg)`;

  leaf.style.animationDelay =
    delay + "s";

  plant.appendChild(leaf);
}


/* --------------------------------
   GRASS
-------------------------------- */

function createGrass(
  x,
  height,
  rotation,
  delay
) {

  const grass =
    document.createElement("div");

  grass.className =
    "grass";

  grass.style.left =
    (x / 650 * 100) + "%";

  grass.style.bottom =
    "0%";

  grass.style.height =
    height + "px";

  grass.style.setProperty(
    "--rotation",
    rotation + "deg"
  );

  grass.style.animationDelay =
    delay + "s";

  plant.appendChild(grass);
}


/* --------------------------------
   CREATE SCENE
-------------------------------- */

function createScene() {

  plant.innerHTML = "";

  const svg = createSVG();

  plant.appendChild(svg);


  /*
    Main flower stems
  */

  createStem(
    svg,
    325, 690,
    325, 165,
    15,
    .1
  );

  createStem(
    svg,
    325, 690,
    240, 245,
    -20,
    .25
  );

  createStem(
    svg,
    325, 690,
    410, 265,
    22,
    .4
  );


  /*
    Extra side stems
  */

  createStem(
    svg,
    310, 690,
    185, 350,
    -35,
    .55,
    true
  );

  createStem(
    svg,
    340, 690,
    470, 350,
    35,
    .7,
    true
  );

  createStem(
    svg,
    295, 690,
    145, 430,
    -40,
    .85,
    true
  );

  createStem(
    svg,
    355, 690,
    505, 420,
    40,
    1,
    true
  );


  /*
    Main flowers
  */

  createFlower(
    325,
    155,
    2.2,
    1
  );

  createFlower(
    238,
    235,
    2.55,
    .9
  );

  createFlower(
    412,
    255,
    2.8,
    .92
  );


  /*
    Leaves around center
  */

  const leaves = [

    [285, 360, -32, 1.8, .9],
    [350, 385, 28, 1.95, .95],

    [270, 410, -35, 2.05, .85],
    [375, 430, 30, 2.15, .9],

    [250, 460, -38, 2.25, .8],
    [395, 475, 35, 2.35, .85],

    [225, 500, -42, 2.4, .78],
    [425, 515, 40, 2.5, .8],

    [295, 500, -28, 2.55, .8],
    [350, 525, 28, 2.65, .82],

    [275, 550, -35, 2.75, .72],
    [390, 565, 36, 2.85, .75],

    [235, 575, -42, 2.95, .68],
    [420, 590, 42, 3.05, .7]

  ];

  leaves.forEach(item => {

    createLeaf(
      item[0],
      item[1],
      item[2],
      item[3],
      item[4]
    );

  });


  /*
    Long grass on the sides
  */

  const grasses = [

    [105, 145, -13, .6],
    [120, 190, 11, .8],
    [140, 125, -9, 1],
    [165, 210, 13, 1.2],

    [500, 150, 12, .7],
    [525, 195, -11, .9],
    [550, 130, 9, 1.1],
    [575, 180, -13, 1.3],

    [185, 105, -8, 1.4],
    [470, 115, 8, 1.5]

  ];

  grasses.forEach(item => {

    createGrass(
      item[0],
      item[1],
      item[2],
      item[3]
    );

  });
}


/* --------------------------------
   TRANSITION
-------------------------------- */

function transitionScene() {

  plant.classList.add("scene-out");

  setTimeout(() => {

    plant.classList.remove("scene-out");

    sceneNumber++;

    createScene();

  }, 1500);
}


/* --------------------------------
   START
-------------------------------- */

createParticles();

createScene();


/*
  Every 12 seconds the flower garden
  gently transitions and grows again.
*/

setInterval(() => {

  transitionScene();

}, 12000);
