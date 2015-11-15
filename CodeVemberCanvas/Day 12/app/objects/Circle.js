export default class Circle {
  constructor(radius, x, y, posArrayLine, middle, posArrayCircle, totalLine) {
    this.posArrayLine = posArrayLine;
    this.posArrayCircle = posArrayCircle;
    this.countTick = 0;
    this.coefX = 0;
    this.firstAnim = 0;

    if (posArrayLine % 2 == 0) {
      this.x = x + 20;
    } else {
      this.x = x;
    }
    
    this.y = y;
    this.color = '#fff';

    this.totalLine = totalLine;
    this.middle = middle;
  }

  resize(width, height) {
    this.width = width;
    this.height = height;
  }

  update(context, pos, tick) {
    this.countTick ++;
    this.coefX --;

    if (this.countTick % 100 == 0) {
      this.firstAnim = 1;
      this.coefX --;
    } else if (this.countTick % 300 == 0) {
      this.firstAnim = 2;
      this.coefX = 0;
    }

    context.fillStyle = '#fff';
    context.strokeStyle = this.color;
    context.beginPath();

    if (this.posArrayLine % 2 == 0) {
      context.arc(this.x, this.y + this.coefX, 5, 0, 2 *  Math.PI, true);
    } else {
      context.arc(this.x, this.y, 5, 0, 2 *  Math.PI, true);
    }
    
    if (this.firstAnim == 1) {
      
    } else if (this.firstAnim == 2) {
      // context.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);
    }

    context.fill();
    context.stroke();
  }
}