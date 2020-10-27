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
    return windowWidth
}
function desiredCanvasHeight(): number {
    return windowHeight
}*/
// Canvas with a fixed aspect ratio
const ASPECT_RATIO = 1
const MARGIN_SIZE = 25 // in pixels

function desiredCanvasWidth(): number {
    const windowRatio = windowWidth / windowHeight
    if (ASPECT_RATIO > windowRatio) {
        return windowWidth - MARGIN_SIZE * 2
    }
    else {
        return desiredCanvasHeight() * ASPECT_RATIO
    }
}
function desiredCanvasHeight(): number {
    const windowRatio = windowWidth / windowHeight
    if (ASPECT_RATIO > windowRatio) {
        return desiredCanvasWidth() / ASPECT_RATIO
    }
    else {
        return windowHeight - MARGIN_SIZE * 2
    }
}
// -------------------
function windowResized() {
    resizeCanvas(desiredCanvasWidth(), desiredCanvasHeight())
    canvas.position((windowWidth - width)/2, (windowHeight - height)/2) // Center the canvas
}