let myShader: p5.Shader

function preload() {
    myShader = loadShader("shader/myShader.vert", "shader/myShader.frag")
}

function setup() {
    template_CreateCanvas()
}

function draw() {
    // Restore usual p5 coordinates
    translate(-width/2, -height/2)
    // Setup shader
    shader(myShader)
    myShader.setUniform("uAspectRatio", width / height)
    // Draw on the whole canvas
    noStroke()
    rect(0, 0, width, height)
}

function windowResized() {
    template_ResizeCanvas()
}