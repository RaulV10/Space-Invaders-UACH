var ship;
var caras = [];
var balas = [];
var esquinas = 0;
var r;

var imagenes = [];

function preload() {
    for (var i = 0; i< 10; i++){
        imagenes[i] = loadImage("images/maestro" + i + ".png");
    }
}

function setup() {
  createCanvas(600, 400);
  ship = new Ship();

  for(var i = 0; i < 6; i++) {
    r = floor(random(0, imagenes.length));
    caras[i] = new Caras(i * 100, 60, imagenes[r]);
  }

  // balas = new Bala(width/2, height);

}

function draw() {
  background(51);
  if(!caras.gameOver) {
    ship.show();
    ship.move();
  }

  var esquina = false;

  for(var i = 0; i < caras.length; i++) {

    if(!caras.gameOver) {
      caras[i].show();
    }
    caras[i].move();

    if(caras[i].x > width || caras[i].x < 0) {
      esquina = true;
    }

    if(caras[i].y >= height) {
      caras.gameOver = true;
      console.log("Reprobado!!!! >:D");
      gameOver();
    }
  }

  if(esquina) {
    esquinas++;
    for(var i = 0; i < caras.length; i++) {
      caras[i].moverAbajo();
    }
  }

  if(esquinas >= 2 && !caras.gameOver) {
    esquinas = 0;

    for(var i = 0; i < 6; i++) {
      r = floor(random(0, imagenes.length));
      var cara = new Caras(i * 100, 60, imagenes[r]);
      caras.push(cara);
    }

  }

  for(var i = 0; i < balas.length; i++) {

    if(!caras.gameOver) {
      balas[i].show();
      balas[i].move();
    }

    for(var j = 0; j < caras.length; j++) {
      if(balas[i].hits(caras[j])) {
        caras[j].grow();
        balas[i].remove();
        //console.log("Le diste");

        if(caras[j].r >= 80) {
          caras[j].remove();
        }
      }
    }
  }

  for(var i = balas.length-1; i >= 0; i--) {
    if(balas[i].borrar) {
      balas.splice(i, 1);
    }
  }

  for(var i = caras.length-1; i >= 0; i--) {
    if(caras[i].borrar) {
      caras.splice(i, 1);
    }
  }

}

function keyPressed() {
  if(keyCode === RIGHT_ARROW) {
    ship.setDir(1);
  } else if(keyCode === LEFT_ARROW) {
    ship.setDir(-1);
  }

  if(key === ' ') {
    var bala = new Bala(ship.x, height);
    balas.push(bala);
  }
}

function keyReleased() {
  if(key != ' ') {
    ship.setDir(0);
  }
}

function gameOver() {
  fill(255);
  textSize(50);
  text('Reprobado!!! >:D', width/2 - 150, height/2);
  updateSprites(false);
}
