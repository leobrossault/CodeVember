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
    this.lineCount = 3;

    this.lines = [];
    this.colors = ['#fff', '#FE9920', '#DC3B20'];
    
    this.resize(width, height);

    for (let i = 0; i < this.lineCount; i ++) {
      let line = new Line (this.width, this.height, i, this.colors[i]);
      this.lines.push(line);
    }
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