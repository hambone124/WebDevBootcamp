function drawCircle(x, y, fillColor) {
    var circle = new Path.Circle(new Point(x, y), 5);
    circle.fillColor = fillColor;
}

var spacing = 25;

for (var x = 1; x <= 10; x++) {
    for (var y = 1; y <= 10; y++) {
        color = new Color(x*.1,255,y*.10);      
        drawCircle(x*spacing, y*spacing, color);
    }
}
