export default class Point {
  constructor(x = 0, y = 0, radius = 0.5, color = '#000') {
    this.scale = 1;
    this.radius = radius;
    this.color = color;
    this.x = x;
    this.y = y;
    this.growth = 0;
    this.posRadius = 0;
    this.alpha = 0;
  }

  draw(context, width, height, angle, arrayPos) {
    this.growth += 0.001;
    this.posRadius = 200 * this.growth + 20;
    this.alpha += 0.01;

    if (this.posRadius < 20) {
      this.posRadius = 20;
    }

    if (this.growth > 0.5) {
      if (this.scale > 0.05) {
        this.scale -= 0.01;
      }   
      this.alpha -= 0.02;
    } else {
      this.scale += 0.01;
    }

    if (arrayPos % 4 == 0) {
      context.fillStyle = 'rgba(35, 100, 170, '+ this.alpha +')';
      context.strokeStyle = 'rgba(35, 100, 170, '+ this.alpha +')';
    } else if (arrayPos % 3 == 0) {
      context.fillStyle = 'rgba(61, 165, 217, '+ this.alpha +')';
      context.strokeStyle = 'rgba(61, 165, 217, '+ this.alpha +')';
    } else if (arrayPos % 2 == 0) {
      context.fillStyle = 'rgba(48, 197, 255, '+ this.alpha +')';
      context.strokeStyle = 'rgba(48, 197, 255, '+ this.alpha +')';      
    } else {
      context.fillStyle = 'rgba(59, 179, 255, '+ this.alpha +')';
      context.strokeStyle = 'rgba(59, 179, 255, '+ this.alpha +')';
    }

    context.beginPath();
    this.x = 0.5 * width + Math.cos(angle) * this.posRadius;
    this.y = 0.5 * height + Math.sin(angle) * this.posRadius;
    context.arc(this.x, this.y, this.radius * this.scale, 0, 2 * Math.PI, false);
    context.fill();
    context.stroke ();

    if (this.alpha < 0) {
      this.alpha = 0;
      this.scale = 1;
      this.growth = 0;
      this.posRadius = 150 * this.growth + 20;
    }
  }
}
