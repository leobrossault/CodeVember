import Line from './objects/Line';

export default class Scene {
  constructor($canvas, width, height) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');

    this.width = width;
    this.height = height;

    this.time = 0;
    this.tick = 0;
    this.lastTime = 0
    this.circleRadius = 2;
    this.margin = 40;

    this.lineCount = this.calcNbreLine (this.height, this.circleRadius, this.margin);

    this.lines = [];
    
    this.resize(width, height);

    for (let i = 0; i < this.lineCount; i ++) {
      let line = new Line (0, this.margin / 2 + (this.circleRadius + this.margin) * i, this.width, this.height, i, this.circleRadius, this.lineCount);
      this.lines.push(line);
    }
  }

  calcNbreLine (height, radius, margin) {
    let count = this.height / (radius + margin) + 1;
    return Math.floor(count);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.$canvas.width = width;
    this.$canvas.height = height;
  }

  render() {
    const now = Date.now();
    const elapsed = (now - this.lastTime) / 100;
    this.tick += elapsed;

    this.context.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.lineCount; i ++) {
      this.lines[i].update(this.context, i, this.tick);
    }

    this.time ++;
    this.lastTime = now;
  }
}