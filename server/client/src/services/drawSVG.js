const extraMargin = 6;
const rowHeight = 35; //px
var topCanvas = 0;
var leftCanvas = 0;

function createSVG(startId, endId, startX, midStartX, startY, endX, midEndX, endY) {
    var svg = document.getElementById(`canvas_${startId}_${endId}`);
    if (svg == null) {
        svg = document.createElementNS("http://www.w3.org/2000/svg",
            "svg");
        svg.setAttribute('id', `canvas_${startId}_${endId}`);
        svg.setAttribute('class', 'canvas');

        // determine which of the two elements is more on top or more to the right of the other
        // in order to determine the starting poing of the canvas
        if (startX < endX) {
            if (startY < endY || startY == endY) {
                topCanvas = (startY - rowHeight - extraMargin);
                leftCanvas = (midStartX - extraMargin);
            } else if (startY > endY) {
                topCanvas = (endY - rowHeight - extraMargin);
                leftCanvas = (midStartX - extraMargin);
            }
        } else if (startX > endX) {
            if (startY < endY || startY == endY) {
                topCanvas = (startY - rowHeight - extraMargin);
                leftCanvas = (midEndX - extraMargin);
            } else if (startY > endY) {
                topCanvas = (endY - rowHeight - extraMargin);
                leftCanvas = (midEndX - extraMargin);
            }
        } else if (startX == endX) {
            if (startY < endY) {
                topCanvas = (startY - rowHeight - extraMargin);
                leftCanvas = (midStartX - extraMargin);
            } else if (startY > endY) {
                topCanvas = (endY - rowHeight - extraMargin);
                leftCanvas = (midEndX - extraMargin);
            }
        }

        var style = 'position: absolute' + ';'
            + 'top: ' + topCanvas + 'px' + ';'
            + 'left: ' + leftCanvas + 'px'

        svg.setAttribute('style', style);
        // svg.setAttribute('width', document.body.clientWidth);
        // svg.setAttribute('height', document.body.clientHeight);
        svg.setAttribute('width', 0);
        svg.setAttribute('height', 0);
        svg.setAttributeNS("http://www.w3.org/2000/xmlns/",
            "xmlns:xlink",
            "http://www.w3.org/1999/xlink");
        document.body.appendChild(svg);
    }
    return svg;
}

function connectDivs(startId, endId, color) {

    // grab the elements by #id
    // var startElem = document.getElementById(startId).parentElement;
    // var endElem = document.getElementById(endId).parentElement;
    var startElem = document.getElementById(startId);
    var endElem = document.getElementById(endId);

    // get (top, left) coordinates for the two elements
    var startX = startElem.offsetLeft;
    var startY = startElem.offsetTop - 1;
    var endX = endElem.offsetLeft;
    var endY = endElem.offsetTop - 1;

    // calculate path's start (x,y)  coords
    // we want the x coordinate to visually result in the element's mid point
    var midStartX = startX + 0.5 * startElem.offsetWidth;
    var midEndX = endX + 0.5 * endElem.offsetWidth;

    //create svg-canvas based on the position of start & end elements
    var svg = createSVG(startId, endId, startX, midStartX, startY, endX, midEndX, endY);

    // adjust the dimentions acording to the new origin of the canvas; the canvas (0, 0) -> (topCanvas, leftCanvas)
    // any new distance/location has to take into account this new origin of the canvas
    var startX = startX - leftCanvas;
    var midStartX = midStartX - leftCanvas;
    var endX = endX - leftCanvas;
    var midEndX = midEndX - leftCanvas;
    var startY = startY - topCanvas;
    var endY = endY - topCanvas;

    // call function for drawing the path
    drawPath(svg, startX, midStartX, startY, endX, midEndX, endY, color);
}

function drawPath(svg, startX, midStartX, startY, endX, midEndX, endY, color) {

    resizeArrowCanvas(svg, midStartX, startX, startY, midEndX, endX, endY);
    var shape = document.createElementNS("http://www.w3.org/2000/svg",
        "path"); {
        // console.log(' HA2 HA2 HA2');
        // console.log('StartY: ', startY, 'EndY: ', endY);
        if (startY == endY) {
            var path = ("M" + midStartX + " " + startY +
                " V" + (startY - rowHeight) +
                " H" + (midEndX) +
                " V" + (endY - 8)
            );
        } else if (startY < endY) {
            var path = ("M" + midStartX + " " + startY +
                " V" + (startY - rowHeight) +
                " H" + (midEndX) +
                " V" + (endY - 8)
            )
        } else if (startY > endY) {
            var path = ("M" + midStartX + " " + startY +
                " V" + (endY - rowHeight) +
                " H" + (midEndX) +
                " V" + (endY - 8)
            )
        }
    }
    shape.setAttributeNS(null, "d", path);
    shape.setAttributeNS(null, "fill", "none");
    shape.setAttributeNS(null, "stroke", color);
    shape.setAttributeNS(null, "marker-end", "url(#triangle)");
    svg.appendChild(shape);

    createTriangleMarker();
}

function resizeArrowCanvas(svg, midStartX, startX, startY, midEndX, endX, endY) {



    // check if the svg is big enough to draw the path, if not, set heigh/width
    // adjust for the Width
    if (startX < endX) {
        if (parseFloat(svg.getAttribute("width")) < (midEndX + extraMargin)) {
            svg.setAttribute("width", (midEndX + extraMargin));
        }
    } else if (startX > endX) {
        if (parseFloat(svg.getAttribute("width")) < (midStartX + extraMargin)) {
            svg.setAttribute("width", (midStartX + extraMargin));
        }
    } else if (startX == endX) {
        if (midStartX < (midEndX + extraMargin)) {
            svg.setAttribute("width", (midEndX + extraMargin));
        } else if (midStartX > (midEndX + extraMargin)) {
            svg.setAttribute("width", (midStartX + extraMargin));
        }
    }
    // adjust for the Height
    if (startY < endY || startY == endY) {
        if (parseFloat(svg.getAttribute("height")) < (endY + extraMargin)) svg.setAttribute("height", endY + extraMargin);
    } else if (startY > endY) {
        if (parseFloat(svg.getAttribute("height")) < (startY + extraMargin)) svg.setAttribute("height", startY + extraMargin);
    }
}

function createTriangleMarker() {
    var svg = createSVG();
    var defs = document.createElementNS('http://www.w3.org/2000/svg',
        'defs');
    svg.appendChild(defs);

    var marker = document.createElementNS('http://www.w3.org/2000/svg',
        'marker');
    marker.setAttribute('id', 'triangle');
    marker.setAttribute('viewBox', '0 0 10 10');
    marker.setAttribute('refX', '0');
    marker.setAttribute('refY', '5');
    marker.setAttribute('markerUnits', 'strokeWidth');
    marker.setAttribute('markerWidth', '10');
    marker.setAttribute('markerHeight', '8');
    marker.setAttribute('orient', 'auto');
    var path = document.createElementNS('http://www.w3.org/2000/svg',
        'path');
    marker.appendChild(path);
    path.setAttribute('d', 'M 0 0 L 10 5 L 0 10 z');
    defs.appendChild(marker);
}

export default {
    createSVG,
    connectDivs,
    drawPath,
    createTriangleMarker
}

