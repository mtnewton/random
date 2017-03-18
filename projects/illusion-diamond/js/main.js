var canvasSize = 600
var segmentSlider;
var segmentCount;

function setup() {
    createCanvas(canvasSize, canvasSize)
    noLoop()
    segmentSlider = createSlider(1, 300, 25)
    segmentCount = segmentSlider.value()
    segmentSlider.changed(function(){
        segmentCount = segmentSlider.value()
        draw()
    })
}

function draw() {
    clear()
    var halfSize = canvasSize / 2
    var segmentLength = halfSize / segmentCount
    line(halfSize, 0, halfSize, canvasSize)
    line(0, halfSize, canvasSize, halfSize)
    makeSection(halfSize, 0, halfSize+segmentLength, halfSize, 0, segmentLength, segmentLength, 0)
    makeSection(halfSize, 0, halfSize-segmentLength, halfSize, 0, segmentLength, -segmentLength, 0)
    makeSection(halfSize, canvasSize, halfSize+segmentLength, halfSize, 0, -segmentLength, segmentLength, 0)
    makeSection(halfSize, canvasSize, halfSize-segmentLength, halfSize, 0, -segmentLength, -segmentLength, 0)
}

function makeSection(x1, y1, x2, y2, dx1, dy1, dx2, dy2) {
    for (var i = 0; i < segmentCount; i++) {
        line(x1, y1, x2, y2)
        x1 += dx1
        y1 += dy1
        x2 += dx2
        y2 += dy2
    }
}
