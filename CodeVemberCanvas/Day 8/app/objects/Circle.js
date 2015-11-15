import Point from './Point';

export default class Circle {
  constructor(nbPoint, width, height) {
    this.width = width;
    this.height = height;
    this.nbPoint = nbPoint;
    this.pool = [];
    this.angles = [];
    this.slice = 0;
    this.speed = 0.001;
    this.init = 0;

    this.position();
  }

  position() {
    let p;
    let x;
    let y;
    let angle = 0;
    this.slice = 2 * Math.PI / this.nbPoint;

    for (let i = 0; i < this.nbPoint; i++) {
      angle = this.slice * i;
      p = new Point(x, y);
      p.color = '#fff';
      this.pool.push(p);
      this.angles[i] = angle;
    }
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  update(context, tick, arrayPos) {
    this.pool.forEach((point, i) => {
      this.angles[i] += this.speed;
      point.x = 0.2 * this.width + Math.cos(this.angles[i]) * 150;
      point.y = 0.2 * this.height + Math.sin(this.angles[i]) * 150;
      point.draw(context, this.width, this.height, this.angles[i], arrayPos);
    });
  }
}