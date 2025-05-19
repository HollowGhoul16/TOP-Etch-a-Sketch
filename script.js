// Creates a length x length grid of blank squares in the container div
function createGrid(length) {
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++){
            const square = document.createElement("div");
            setupSquare(square, length);
            container.appendChild(square);
        }
    }
}

// Adds the correct properties and functionalities for the square node
function setupSquare(square, length) {
    square.classList.add("square");
    square.style.width = (1/length * 100) + "%";
    square.style.height = (1/length * 100) + "%";
    square.style.opacity = 1;
    square.addEventListener("mouseover", () => interactSquare(square));
}

// Generates a random color and fades the square by 10% for each interaction
function interactSquare(square) {
    square.style.backgroundColor = randomColor();
    square.style.opacity = (+square.style.opacity - .1).toString();
}

function randomColor() {
    const R = Math.floor(Math.random() * 256);
    const G = Math.floor(Math.random() * 256);
    const B = Math.floor(Math.random() * 256);
    const RGB = `rgb(${R}, ${G}, ${B})`;
    return RGB;
}

// Will delete old grid and create new one
function makeNewGrid() {
    let length = prompt("Enter a new grid length");
    while(length > 100) {
        length = prompt("Error: Max length is 100. Enter a new grid length");
    }
    deleteGrid(document.querySelectorAll(".square"));
    createGrid(+length);
}

function deleteGrid(nodeList) {
    nodeList.forEach(node => node.remove());
}

// Get nodes needed for interactivity
const container = document.querySelector("#container");
const newGridButton = document.querySelector("button");

newGridButton.addEventListener("click", () => makeNewGrid());

// Base grid size for website
createGrid(16);