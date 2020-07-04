const cfg = {
  vehiclesLength: 30,
  maxLineLength: 130,
}
const vehicles = [];
let mouse;

function setup() {
  createCanvas(windowWidth, windowHeight).position(0);

  for (let i = 0; i < cfg.vehiclesLength; i++) {
    const v = new Vehicle();

    vehicles.push(v);
  }
}

function draw() {
  background(220);
  mouse = createVector(mouseX, mouseY);

  for (const v of vehicles) {
    v.behaviors();
    v.update();
    v.show();
  }

  for (let i = 0; i < vehicles.length; i++) {
    const v1 = vehicles[i];

    for (let j = i + 1; j < vehicles.length; j++) {
      const v2 = vehicles[j];

      connect(v1.pos, v2.pos);
    }

    connect(v1.pos, mouse);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function connect(v1, v2, radius = cfg.maxLineLength) {
  const dist = p5.Vector.dist(v1, v2);

  if (dist < radius) {
    noFill();
    stroke(map(dist, 0, radius, 100, 220));
    line(v1.x, v1.y, v2.x, v2.y);
  }
}
