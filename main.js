var svg = document.getElementById("mySvg");
var svgns = "http://www.w3.org/2000/svg";

class myBar {
	constructor(x, y, w, h, data, fill, hover) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .15 * this.w;
		this.strokeWidth = "1.5";
		this.labelX = data["header"][0];
		this.labelY = data["header"][1];
		this.dataSet = data["values"];

		this.maxVal = this.dataSet.reduce(function(acc, point) {
			return Math.max(point[data["header"][1]], acc);
		}, this.dataSet[0][this.labelY]);

		this.fill = fill;
		this.hover = hover;

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", "bar-chart");
		svg.appendChild(this.chart);

	}

	drawAxes (svg) {
		var linex = document.createElementNS(svgns, "line");
		var liney = document.createElementNS(svgns, "line");
		linex.setAttribute('x1', this.x + this.offset);
		linex.setAttribute('y1', this.y + this.h - this.offset);
		linex.setAttribute('x2', this.x + this.w - this.offset);
		linex.setAttribute('y2', this.y + this.h - this.offset);
		linex.setAttribute('stroke-width', this.strokeWidth);
		linex.setAttribute('stroke', "black");

		liney.setAttribute('x1', this.x + this.offset);
		liney.setAttribute('y1', this.y + this.offset);
		liney.setAttribute('x2', this.x + this.offset);
		liney.setAttribute('y2', this.y + this.h - this.offset);
		liney.setAttribute('stroke-width', this.strokeWidth);
		liney.setAttribute('stroke', "black");

		this.chart.appendChild(linex);
		this.chart.appendChild(liney);

		let labelX = document.createElementNS(svgns, "text");
		labelX.setAttribute('x', this.x + this.w / 2);
		labelX.setAttribute('y', this.y + this.h);
		

		let textNode = document.createTextNode(this.labelX);
		labelX.appendChild(textNode);
		this.chart.appendChild(labelX);

		let labelY = document.createElementNS(svgns, "text");
		labelY.setAttribute('x', this.x + this.offset/2);
		labelY.setAttribute('y', this.y + this.h / 2);
		labelY.setAttribute('transform', "rotate(-90 " + this.x + this.offset/2 + "," + this.y + this.h / 2 + ")");
		// labelY.setAttribute('translateY', "100")
		

		let textNodeY = document.createTextNode(this.labelY);
		labelY.appendChild(textNodeY);
		this.chart.appendChild(labelY);

	}

	drawBar(svg) {
		this.drawAxes(svg);

		var fill = this.fill;
		var hover = this.hover;
		var interval = (this.w - this.offset * 2) / (this.dataSet.length * 2 + 1);
		var x_pos = this.x + this.offset + interval;

		var value;
		for (value in this.dataSet) {
			let rect = document.createElementNS(svgns, "rect")
			rect.setAttribute('x', x_pos);
			rect.setAttribute('y', this.y + this.h - this.offset - (this.h - (this.offset * 2)) * this.dataSet[value][this.labelY] / this.maxVal);
			rect.setAttribute('width', interval);
			rect.setAttribute('height', (this.h - (this.offset * 2)) * this.dataSet[value][this.labelY] / this.maxVal);
			rect.setAttribute('fill', this.fill);

			let val = this.dataSet[value][this.labelY];
			var chart = this.chart;

			rect.addEventListener("mouseover", function(event){
			    rect.setAttribute("fill", hover);

			    let title = document.createElementNS(svgns, "title");
				title.innerHTML =  val;
				rect.appendChild(title);
				// chart.appendChild(textBox);
		    });

			rect.addEventListener("mouseleave", function(event){
				rect.setAttribute("fill", fill);
			});

			this.chart.appendChild(rect);

			let label = document.createElementNS(svgns, "text");
			label.setAttribute('x', x_pos + interval/2);
			label.setAttribute('y', this.y + this.h - this.offset * 3 / 4);
			label.setAttribute("font-size", "12px");

			let textNode = document.createTextNode(this.dataSet[value][this.labelX]);
			label.appendChild(textNode);
			this.chart.appendChild(label);

			x_pos += interval * 2;

		}
	}
}

var data = {"header": ["Gender" , "Population"],
            "values": [{"Gender": "Men", "Population": 22},
                       {"Gender": "Women", "Population": 7}]};

var bar = new myBar(0, 0, 800, 500, data, "#6b4455", "#996461");
bar.drawBar(svg);


// var circle = document.createElementNS(svgns, "circle");



// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);