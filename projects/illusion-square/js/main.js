var canvasSize = 600
var percentage
var stop
var percentageSlider
var stopSlider

function setup() {
    createCanvas(canvasSize, canvasSize)
    noLoop()
    percentageSlider = createSlider(2, 100, 20)
    percentage = percentageSlider.value()
    percentageSlider.changed(function(){
        percentage = percentageSlider.value()
        draw()
    })
    stopSlider = createSlider(1, 600, 1)
    stop = stopSlider.value()
    stopSlider.changed(function(){
        stop = stopSlider.value()
        draw()
    })
}

function draw() {
    clear()
    var vectors = [
        createVector(0, 0),
        createVector(canvasSize-1, 0),
        createVector(canvasSize-1, canvasSize-1),
        createVector(0, canvasSize-1),
        createVector(0, 0)
    ]
    while (vectors[0].dist(vectors[1]) > stop) {
        for (var v = 0; v < vectors.length-1; v++) {
            line(vectors[v].x, vectors[v].y, vectors[v+1].x, vectors[v+1].y)
            var step = p5.Vector.sub(vectors[v+1], vectors[v]).div(percentage)
            vectors[v].add(step)
        }
        vectors[4] = vectors[0].copy()
    }
}
