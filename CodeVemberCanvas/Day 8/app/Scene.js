import Circle from './objects/Circle';

export default class Scene {
  constructor($canvas, width, height) {
    this.$canvas = $canvas;
    this.context = this.$canvas.getContext('2d');
    this.nbCircle = 10;
    this.count = 0;
    this.countArray = 0;

    this.width = 0;
    this.height = 0;

    this.params = {};

    this.tick = 0;
    this.lastTime = 0;
    this.circles = [];

    for (let i = 0; i < this.nbCircle; i++) {
      let circle;
      circle = new Circle(20, width, height);
      this.circles.push(circle);
    }
    
    this.resize(width, height);
    console.log(this.circles);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    // this.circle.resize(width, height);
    this.$canvas.width = width;
    this.$canvas.height = height;
  }

  render() {
    this.count ++;
    const now = Date.now();
    const elapsed = (now - this.lastTime) / 1000;

    this.tick += elapsed;
    this.context.clearRect(0, 0, this.width, this.height);

    if (this.count % 100 == 0) {
      this.countArray ++;
    }

    for (let j = 0; j < this.nbCircle; j++) {

      if (j <= this.countArray) {
        this.circles[j].update(this.context, this.tick, j);
      }   
    }

    this.lastTime = now;
  }
}