function Bala(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.borrar = false;

  this.show = function() {
    fill(200, 50, 0);
    ellipse(this.x, this.y, this.r*2, this.r*2);
  }

  this.move = function() {
    this.y = this.y - 5;
  }

  this.hits = function(cara) {
    var d = dist(this.x, this.y, cara.x, cara.y);
    if(d < this.r + cara.r) {
      return true;
    } else {
      return false;
    }
  }

  this.remove = function() {
    this.borrar = true;
  }

}
