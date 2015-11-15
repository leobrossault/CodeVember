export default class Circle {
  constructor(radius, x, y, posArrayLine, middle, posArrayCircle, totalLine) {
    this.posArrayLine = posArrayLine;
    this.posArrayCircle = posArrayCircle;

    this.x = x;
    this.y = y;
    this.aleaFill = Math.floor(Math.random() * (10));

    let colors = ['#FE5F55', '#F0B67F', '#D6D1B1', '#C7EFCF', '#F2DC5D'];
    // this.color = colors[Math.floor(Math.random () * (colors.length))];
    this.color = '#fff';

    if (posArrayLine == Math.floor((totalLine / 2 + (totalLine * 0.5)/2)) && posArrayCircle == Math.floor((middle + middle * 0.5))) {
      this.color = '#FE5F55';
    }

    this.totalLine = totalLine;
    this.middle = middle;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  update(context, pos, tick) {
    let x;
    let y;

    if (Math.floor(this.totalLine / 2) > this.posArrayLine) {
      y = this.y + Math.sin(tick + this.posArrayLine) * (0.5 * this.posArrayLine);
    } else if (Math.floor(this.totalLine / 2) < this.posArrayLine) {
      y = this.y + Math.sin(tick + (this.totalLine - this.posArrayLine)) * (-0.5 * (this.totalLine - this.posArrayLine));
    } else {
      y = this.y;
    }

    x = this.x + Math.sin(tick + this.posArrayCircle);

    context.fillStyle = '#1B1919';

     if (this.posArrayLine == Math.floor((this.totalLine / 2 + (this.totalLine * 0.5)/2)) && this.posArrayCircle == Math.floor((this.middle + this.middle * 0.5))) {
      context.fillStyle = '#FE5F55';
    }

    context.strokeStyle = this.color;
    context.beginPath();
    context.arc(x - 10, y + 20, 40, -1, 2 * Math.PI, true);
    context.fill();
    context.stroke();
  }
}