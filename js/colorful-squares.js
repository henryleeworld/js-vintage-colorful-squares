let canvas;
let ctx;
let w, h;
let colors;
let colorSchemeIndex;

function setup() {
    setupColors();
    canvas = document.querySelector("#canvas");
    ctx = canvas.getContext("2d");
    reset();
    canvas.addEventListener("click", draw);
    window.addEventListener("resize", reset);
}

function setupColors() {
    colors = [
        [
            "#ffffff",
            "#84dcc6",
            "#a5ffd6",
            "#ffa69e",
            "#ff686b"
        ],

        [
            "#ef476f",
            "#ffd166",
            "#06d6a0",
            "#118ab2",
            "#073b4c"
        ],

        [
            "#f2d7ee",
            "#d3bcc0",
            "#a5668b",
            "#69306d",
            "#0e103d"
        ],

        [
            "#ffbe0b",
            "#fb5607",
            "#ff006e",
            "#8338ec",
            "#3a86ff"
        ],

        [
            "#ffac81",
            "#ff928b",
            "#fec3a6",
            "#efe9ae",
            "#cdeac0"
        ],

        [
            "#011627",
            "#fdfffc",
            "#2ec4b6",
            "#e71d36",
            "#ff9f1c"
        ],

        [
            "#03256c",
            "#2541b2",
            "#1768ac",
            "#06bee1",
            "#ffffff"
        ],

        [
            "#f7b267",
            "#f79d65",
            "#f4845f",
            "#f27059",
            "#f25c54"
        ],

        [
            "#4b6e70",
            "#97b5ac",
            "#718f86",
            "#d4ded4",
            "#a9b0cb"
        ],

        [
            "#a7c6da",
            "#c3957d",
            "#bd5f70",
            "#dcd9f8",
            "#cbb38c"
        ],

        [
            "#ffbe0b",
            "#fb5607",
            "#ff006e",
            "#8338ec",
            "#3a86ff"
        ],

        [
            "#283d3b",
            "#197278",
            "#edddd4",
            "#c44536",
            "#772e25"
        ],

        [
            "#ffe74c",
            "#ff5964",
            "#ffffff",
            "#6bf178",
            "#35a7ff"
        ]
    ];


}

function getRandomColor() {
    let len = colors[colorSchemeIndex].length;
    let randomIndex = random(len);
    return colors[colorSchemeIndex][randomIndex];
}

function reset() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    draw();
}

function draw() {
    let nrOfColorSchemes = colors.length;
    colorSchemeIndex = random(nrOfColorSchemes);
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(0, 0, w, h);
    let size = 50;
    let lineWidth = size / 6;
    for (let x = 0; x < w + size; x += size) {
        for (let y = 0; y < h + size; y += size) {
            drawSquares(x, y, size * 0.85, lineWidth);
        }
    }
}

function drawSquares(x, y, size, lineWidth) {
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = getRandomColor();
    ctx.strokeRect(x - size / 2, y - size / 2, size, size);
    ctx.strokeStyle = getRandomColor();
    ctx.strokeRect(x - size / 3, y - size / 3, size / 1.5, size / 1.5);
    ctx.strokeStyle = getRandomColor();
    ctx.strokeRect(x - size / 6, y - size / 6, size / 3, size / 3);
    ctx.fillStyle = getRandomColor();
    ctx.fillRect(x - size / 12, y - size / 12, size / 6, size / 6);
}

function random(max) {
    return Math.floor(Math.random() * max);
}

setup();