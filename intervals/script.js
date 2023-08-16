let time = 0;
let counterElement = document.getElementById("time");

function updateCounter() {
    counterElement.textContent = time;
}

function startCounter() {
    updateCounter();
    time++;

    setTimeout(startCounter, 1000); 
}

startCounter();
