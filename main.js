var svg = document.getElementById("mySvg");
var svgns = "http://www.w3.org/2000/svg";

class myBar {
	constructor(x, y, w, h) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .15 * this.w;
	}

	drawAxes (svg) {
		var linex = document.createElementNS(svgns, "line");
		var liney = document.createElementNS(svgns, "line");
		linex.setAttribute('x1', this.x + this.offset);
		linex.setAttribute('y1', this.y + this.h - this.offset);
		linex.setAttribute('x2', this.x + this.w - this.offset);
		linex.setAttribute('y2', this.y + this.h - this.offset);
		linex.setAttribute('stroke-width', "2");
		linex.setAttribute('stroke', "black");
		svg.appendChild(linex);
	}
}

var bar = new myBar(0, 0, 100, 100);
bar.drawAxes(svg);


// var circle = document.createElementNS(svgns, "circle");



// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);