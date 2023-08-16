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

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);  // Adjusted the size of the square

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 25);  // Adjusted the position of the score text

    // check if in goal
    if (xPos + 15 >= 220 && xPos - 15 <= 280 && yPos + 15 >= 480) {  // Adjusted the condition for scoring
        score++;
        // reset position and speed
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }

    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
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
    // Calculate the direction vector towards the mouse click
    let directionX = mouseX - xPos;
    let directionY = mouseY - yPos;

    // Normalize the direction vector to control the speed of movement
    let directionMagnitude = sqrt(directionX ** 2 + directionY ** 2);
    let slowerSpeed = 2;  // Adjust the slower speed value as needed
    xSpeed = directionX / directionMagnitude * slowerSpeed;
    ySpeed = directionY / directionMagnitude * slowerSpeed;
}
