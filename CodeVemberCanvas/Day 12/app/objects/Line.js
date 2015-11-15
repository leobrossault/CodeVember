import Circle from './Circle';

export default class Line {
  constructor(x, y, width, height, pos, radius, totalLine) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;

    this.circleRadius = radius;
    this.circleMargin = 40;
    this.circleCount = this.calcNbreCircle(this.circleRadius, this.circleMargin);
    this.circles = [];
    this.pos = pos;

    for (let i = 0; i < this.circleCount; i ++) {
      let circle = new Circle (40, 10 + (this.circleRadius + this.circleMargin) * i, this.y, this.pos, Math.floor(this.circleCount / 2), i, totalLine);
      this.circles.push(circle);
    }
  }

  calcNbreCircle (radius, margin) {
    let count = this.width / (radius + margin);
    return count;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  update(context, pos, tick) {
    for (let i = 0; i < this.circleCount; i ++) {
      this.circles[i].update(context, i, tick);
    }
  }
}