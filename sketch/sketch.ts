let canvas: p5.Renderer // Need to access this each time we resize the window, to center the canvas
let myShader: p5.Shader

function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag")
}

function setup() {
    canvas = createCanvas(desiredCanvasWidth(), desiredCanvasHeight(), WEBGL)
    canvas.position((windowWidth - width)/2, (windowHeight - height)/2) // Center the canvas
}

function draw() {
    shader(myShader)
    myShader.setUniform("uAspectRatio", width / height)
    rect(0, 0, 0, 0)
}


// -------------------
// Choose how your canvas will fit in the window
// -------------------
// Fill the window
/*function desiredCanvasWidth(): number {
    return windowWidth;
}
function desiredCanvasHeight(): number {
    return windowHeight;
}*/
// Squared canvas with a margin
function desiredCanvasWidth(): number {
    const margin = 25 // in pixels
    return min(windowWidth, windowHeight) - margin * 2;
}
function desiredCanvasHeight(): number {
    return desiredCanvasWidth();
}
// -------------------
function windowResized() {
    resizeCanvas(desiredCanvasWidth(), desiredCanvasHeight())
    canvas.position((windowWidth - width)/2, (windowHeight - height)/2) // Center the canvas
}