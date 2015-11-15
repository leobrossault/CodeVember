import Circle from './Circle';

export default class Line {
  constructor(width, height, pos, color) {
    this.width = width;
    this.height = height;

    this.circleRadius = 5;
    this.circleMargin = 20;
    this.circleCount = this.calcNbreCircle(this.circleRadius, this.circleMargin);
    this.circles = [];
    this.color = color;
    this.pos = pos;

    for (let i = 0; i < this.circleCount; i ++) {
      let circle = new Circle (this.circleRadius, 2.5 + 25 * i, this.height / 2, this.pos, color, Math.floor(this.circleCount / 2), i);
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