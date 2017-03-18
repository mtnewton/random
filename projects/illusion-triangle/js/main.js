var canvasWidth = 600
var canvasHeight = 600 * 13 / 15
var percentage
var stop
var percentageSlider
var stopSlider

function setup() {
    createCanvas(canvasWidth, canvasHeight)
    noLoop()
    percentageSlider = createSlider(2, 100, 28)
    percentage = percentageSlider.value()
    percentageSlider.changed(function(){
        percentage = percentageSlider.value()
        draw()
    })
    stopSlider = createSlider(1, 600, 18)
    stop = stopSlider.value()
    stopSlider.changed(function(){
        stop = stopSlider.value()
        draw()
    })
}

function draw() {
    clear()
    var vectors = [
        createVector(canvasWidth/2, 0),
        createVector(canvasWidth-1, canvasHeight-1),
        createVector(0, canvasHeight-1),
        createVector(canvasWidth/2, 0),
    ]
    while (vectors[0].dist(vectors[1]) > stop) {
        for (var v = 0; v < vectors.length-1; v++) {
            line(vectors[v].x, vectors[v].y, vectors[v+1].x, vectors[v+1].y)
            var step = p5.Vector.sub(vectors[v+1], vectors[v]).div(percentage)
            vectors[v].add(step)
        }
        vectors[vectors.length-1] = vectors[0].copy()
    }
}
