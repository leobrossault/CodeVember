import Circle from './Circle';

export default class Scene {
  constructor(canvas, width, height) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');

    this.width = 0;
    this.height = 0;

    this.resize(width, height);
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
    this.canvas.width = width;
    this.canvas.height = height;
  }

  render() {

  }
}