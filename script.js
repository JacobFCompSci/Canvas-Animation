// HTML Canvas

// Canvas setup

var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 750;

let starsX = [];
let starsY = [];

let shootX = -10;
let shootY = 150;

let wolfX = 900;
let wolfY = 550;

let grrX = 900;
let grrY = 520;

let wordsX = -500;
let wordsY = 460;

let birdX = -40;
let birdY = 200;

for (let i = 0; i < 40; i++) {
  let randX = Math.random() * 800 + 1;
  randX = randX.toFixed(0);
  starsX.push(randX);

  let randY = Math.random() * 300 + 1;
  randY = randY.toFixed(0);
  starsY.push(randY);
}

requestAnimationFrame(draw);

function draw() {
  // background

  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, 800, 750);

  // Floor

  ctx.fillStyle = "rgb(1, 50, 32";
  ctx.fillRect(0, 400, 800, 400);

  // Tree Trunks

  ctx.fillStyle = "rgb(75, 46, 44)";
  ctx.fillRect(80, 340, 30, 80);
  ctx.fillRect(230, 380, 40, 80);
  ctx.fillRect(370, 350, 30, 110);
  ctx.fillRect(500, 350, 30, 60);
  ctx.fillRect(670, 330, 40, 110);

  // Moon

  ctx.fillStyle = "white";
  ctx.beginPath();
  ctx.arc(75, 50, 50, 0, 2 * Math.PI);
  ctx.fill();

  // Stars

  let i = 0;
  do {
    i++;

    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(starsX[i], starsY[i], 2, 0, 2 * Math.PI);
    ctx.fill();
  } while (i < 40);

  ctx.fillStyle = "lightblue";
  ctx.beginPath();
  ctx.arc(shootX, shootY, 5, 0, 2 * Math.PI);
  ctx.fill();
  // Leaves

  ctx.fillStyle = "darkgreen";
  ctx.beginPath();
  ctx.moveTo(100, 60);
  ctx.lineTo(25, 390);
  ctx.lineTo(200, 390);
  ctx.lineTo(100, 60);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(245, 20);
  ctx.lineTo(145, 380);
  ctx.lineTo(355, 380);
  ctx.lineTo(245, 20);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(395, 30);
  ctx.lineTo(295, 350);
  ctx.lineTo(505, 350);
  ctx.lineTo(395, 30);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(520, 40);
  ctx.lineTo(400, 370);
  ctx.lineTo(600, 370);
  ctx.lineTo(520, 40);
  ctx.fill();
  ctx.beginPath();
  ctx.moveTo(690, 60);
  ctx.lineTo(560, 360);
  ctx.lineTo(770, 360);
  ctx.lineTo(690, 60);
  ctx.fill();

  // Bird
  let bird = document.getElementById("bird");
  ctx.drawImage(bird, birdX, birdY, 70, 70);

  // Campfire

  let fire = document.getElementById("fire-img");
  ctx.drawImage(fire, 160, 520, 130, 130);

  // StickMan Head
  ctx.lineWidth = "3";
  ctx.strokeStyle = "black";
  ctx.beginPath();
  ctx.arc(370, 500, 22, 0, 2 * Math.PI);
  ctx.stroke();

  // StickMan Torso
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(370, 522); // Neck
  ctx.lineTo(375, 590); // Butt
  ctx.stroke();

  // Stickman Arm

  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(372, 540); // Elbow
  ctx.lineTo(350, 560); // Shoulder
  ctx.stroke();

  //Roasting stick
  ctx.strokeStyle = "rgb(75, 46, 44)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(350, 580); // Hand
  ctx.lineTo(240, 490); // Tip of stick
  ctx.stroke();

  // Stickman Hand

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(320, 560); // Hand
  ctx.lineTo(350, 560); // Elbow
  ctx.stroke();

  // Stickman upper leg
  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(360, 630); // Knee
  ctx.lineTo(375, 590); // Butt
  ctx.stroke();

  // Stickman lower leg

  ctx.strokeStyle = "black";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(360, 630); // Knee
  ctx.lineTo(400, 635); // foot
  ctx.stroke();

  // Marshmallow
  ctx.fillStyle = "white";
  ctx.fillRect(250, 500, 15, 20);

  // Title

  ctx.fillStyle = "gray";
  ctx.font = "30px Arial";
  ctx.fillText("Forest Night", 300, 30);

  // Wolf
  let wolf = document.getElementById("wolf");
  ctx.drawImage(wolf, wolfX, wolfY, 120, 120);

  // Wolf Words
  ctx.fillStyle = "white";
  ctx.font = "15px Arial";
  ctx.fillText("Grrr", grrX, grrY);

  // StickMan Words
  ctx.fillStyle = "white";
  ctx.font = "15px Arial";
  ctx.fillText("Uh Oh!", wordsX, wordsY);

  // Animation

  shootX = shootX + 2;
  shootY = shootY - 0.2;
  if (shootX >= 810) {
    shootX = -10;
    shootY = 150;
  }

  wolfX = wolfX - 4;
  if (wolfX <= 500) {
    wolfX = 500;
  }

  grrX = grrX - 4;
  if (grrX <= 550) {
    grrX = 550;
  }

  wordsX = wordsX + 4;
  if (wordsX >= 300) {
    wordsX = 300;
  }

  birdX = birdX + 2;
  if (birdX > 880) {
    birdX = -40;
  }

  requestAnimationFrame(draw);
}
