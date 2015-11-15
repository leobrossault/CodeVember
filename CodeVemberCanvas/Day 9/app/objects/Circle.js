export default class Circle {
  constructor(radius, x, y, posArrayLine, color, middle, posArrayCircle) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.scale = 1;
    
    if (posArrayLine == 0) {
      this.amp = 5;
    } else if (posArrayLine == 1) {
      this.amp = 20 * posArrayLine + 10;
    } else {
      this.amp = - 20 * posArrayLine - 10;
    }

    if (posArrayLine != 0) {
      if (posArrayCircle < middle) {
        this.scale = 0.5 + posArrayCircle / 20;
      } else {
        this.scale = 0.5 + ((middle * 2) - posArrayCircle) / 20;
      }
    }

    this.color = color;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  update(context, pos, tick) {
    let y = this.y + Math.sin(tick + pos) * this.amp;
    context.fillStyle = this.color;
    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(this.x, y, this.radius * this.scale, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke();
  }
}