let font;
let graphic;

const waveInput = document.querySelector("input.wave");
const line1Input = document.querySelector("input.line1");
const line2Input = document.querySelector("input.line2");
const dxInput = document.querySelector("input.dx");
const dyInput = document.querySelector("input.dy");

function preload() {
	font = loadFont("assets/spacegrotesk-medium.otf");
}

function setup() {
	createCanvas(1200, 600);
	createCopy();
}

function draw() {
	background("#ebe2d8");

	const tileSize = 10;

	for (let x = 0; x < 120; x++) {
		for (let y = 0; y < 60; y++) {
			const wave = waveInput.value;

			const distortionX = sin(frameCount * wave + x * 0.5 + y * 0.3) * dxInput.value;
			const distortionY = sin(frameCount * wave + x * 0.5 + y * 1) * dyInput.value;

			const sx = x * tileSize + distortionX;
			const sy = y * tileSize + distortionY;
			const sw = tileSize;
			const sh = tileSize;

			const dx = x * tileSize;
			const dy = y * tileSize;
			const dw = tileSize;
			const dh = tileSize;

			image(graphic, dx, dy, dw, dh, sx, sy, sw, sh);
		}
	}
}

function createCopy() {
	graphic = createGraphics(1200, 600);
	graphic.fill("#ff0000");
	graphic.textSize(300);
	graphic.textFont(font);
	graphic.textAlign(CENTER, CENTER);
	graphic.textLeading(200);
	graphic.text(`${line1Input.value}\n${line2Input.value}`, 600, 300);
}

line1Input.addEventListener("input", createCopy);
line2Input.addEventListener("input", createCopy);
