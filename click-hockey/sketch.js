let xPos = 250;
let yPos = 0;
let xSpeed = 0;
let ySpeed = 0;
let score = 0;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(222);

    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);  

    fill(18);
    textSize(20);
    text("Score: " + score, 10, 25);  

    if (xPos + 15 >= 220 && xPos - 15 <= 280 && yPos + 15 >= 480) {  // Adjusted the condition for scoring
        score++;
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }

    xPos += xSpeed;
    yPos += ySpeed;

    if (xPos < 0) {
        xPos = 500;
    }
    if (xPos > 500) {
        xPos = 0;
    }
    if (yPos > 500) {
        yPos = 0;
        score--;
    }
}

function mouseClicked() {
    let directionX = mouseX - xPos;
    let directionY = mouseY - yPos;

    let directionMagnitude = sqrt(directionX ** 2 + directionY ** 2);
    let slowerSpeed = 2;  
    xSpeed = directionX / directionMagnitude * slowerSpeed;
    ySpeed = directionY / directionMagnitude * slowerSpeed;
}
