function Caras(x, y, img) {
  this.x = x;
  this.y = y;
  this.r = 30;
  this.img = img;
  this.borrar = false;
  this.gameOver = false;

  this.xdir = 1;

  this.show = function() {
    // noStroke();
    // fill(255, 0, 200);
    // ellipse(this.x, this.y, this.r*2, this.r*2);
    image(img, this.x, this.y, this.r*2, this.r*2);
  }

  this.grow = function() {
    this.r = this.r + 10;
  }

  this.move = function() {
    this.x = this.x + this.xdir;
  }

  this.moverAbajo = function() {
    this.xdir *= -1;
    this.y += this.r;
  }

  this.remove = function() {
    this.borrar = true;
  }
}
