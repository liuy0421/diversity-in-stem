class myBar {
	constructor(x, y, w, h, data, fill, hover, id, svg, moneyData) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .1 * this.w;
		this.strokeWidth = "1.5";
		this.labelX = data["header"][0];
		this.labelY = data["header"][1];
		this.dataSet = data["values"];
		this.ID = id;
		this.printMoney = moneyData;

		this.maxVal = this.dataSet.reduce(function(acc, point) {
			return Math.max(point[data["header"][1]], acc);
		}, this.dataSet[0][this.labelY]);

		this.fill = fill;
		this.hover = hover;

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", this.ID);
		this.svg = svg;
		this.svg.appendChild(this.chart);

	}

	setData(data) {
		this.labelX = data["header"][0];
		this.labelY = data["header"][1];
		this.dataSet = data["values"];
		this.maxVal = this.dataSet.reduce(function(acc, point) {
			return Math.max(point[data["header"][1]], acc);
		}, this.dataSet[0][this.labelY]);
	}

	setColors(fill, hover) {
		this.fill = fill;
		this.hover = hover;
	}

	drawAxes () {
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
		labelY.setAttribute('x', this.x + 3 * this.offset / 4);
		labelY.setAttribute('y', this.y + this.h / 2);
		labelY.setAttribute('transform', "rotate(-90 " + this.x + 3 * this.offset / 4+ "," + this.y + this.h / 2 + ")");
		// labelY.setAttribute('translateY', "100")
		

		let textNodeY = document.createTextNode(this.labelY);
		labelY.appendChild(textNodeY);
		this.chart.appendChild(labelY);

	}

	drawBar() {
		var fill = this.fill;
		var hover = this.hover;
		let interval = (this.w - this.offset * 2) / (this.dataSet.length * 2 + 1);
		let x_pos = this.x + this.offset + interval;

		let value;
		for (value in this.dataSet) {
			let rect = document.createElementNS(svgns, "rect")
			rect.setAttribute('x', x_pos);
			rect.setAttribute('y', this.y + this.h - this.offset - (this.h - (this.offset * 2)) * this.dataSet[value][this.labelY] / this.maxVal);
			rect.setAttribute('width', interval);
			rect.setAttribute('height', (this.h - (this.offset * 2)) * this.dataSet[value][this.labelY] / this.maxVal);
			rect.setAttribute('fill', this.fill);

			let val = this.dataSet[value][this.labelY];
			let chart = this.chart;
			let yp = (this.y + this.h - this.offset - (this.h - (this.offset * 2)) * this.dataSet[value][this.labelY] / this.maxVal) - this.offset /2;
			let valLabel = document.createElementNS(svgns, "text");
			let labelXpos = x_pos;

			if (this.printMoney) {
				val = "$" + val;
			}

			let labelTextNode = document.createTextNode(val);

			rect.addEventListener("mouseover", function(event){
			    rect.setAttribute("fill", hover);

				valLabel.setAttribute('x', labelXpos + interval/2);
				valLabel.setAttribute('y', yp);
				valLabel.setAttribute("font-size", "1vw");

				valLabel.appendChild(labelTextNode);
				chart.appendChild(valLabel);
		    });

			rect.addEventListener("mouseleave", function(event){
				rect.setAttribute("fill", fill);
				valLabel.removeChild(labelTextNode);
				chart.removeChild(valLabel);
			});

			this.chart.appendChild(rect);

			let label = document.createElementNS(svgns, "text");
			label.setAttribute('x', x_pos + interval/2);
			label.setAttribute('y', this.y + this.h - this.offset /2);
			label.setAttribute("font-size", "1vw");

			let textNode = document.createTextNode(this.dataSet[value][this.labelX]);
			label.appendChild(textNode);
			this.chart.appendChild(label);

			x_pos += interval * 2;

		}
	}

	draw() {
		this.svg.removeChild(this.chart);
		this.chart = document.createElementNS(svgns, "g");
		this.svg.appendChild(this.chart);
		this.drawBar();
		this.drawAxes();
	}
	
}