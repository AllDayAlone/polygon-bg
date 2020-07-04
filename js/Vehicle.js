
class Vehicle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.vel.setMag(random(0.1, 2.5));
    this.r = 1.5;
  }

  update() {
    this.pos.add(this.vel);

    this.bounce();
  }

  bounce() {
    if (this.pos.x < 0 || this.pos.x > windowWidth) {
      this.vel.x *= -1;
    }

    if (this.pos.y < 0 || this.pos.y > windowHeight) {
      this.vel.y *= -1;
    }
  }

  behaviors() {
    const dist = p5.Vector.dist(this.pos, mouse);
    const low = 100;
    const high = 200;

    if (low < dist && dist < high) {
      const desired = p5.Vector.sub(mouse, this.pos);
      desired.setMag(3);
      this.pos.add(desired);
    }
  }

  show() {
    ellipseMode(RADIUS);
    noStroke();
    fill(150);
    ellipse(this.pos.x, this.pos.y, this.r);
  }
}