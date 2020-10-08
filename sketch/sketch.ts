let myShader: p5.Shader

function preload() {
    myShader = loadShader("shader/vert.glsl", "shader/frag.glsl")
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
}

function draw() {
    shader(myShader)
    myShader.setUniform("uAspectRatio", width / height)
    rect(0, 0, width, height)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}