class twoBars {

	constructor (x, y, w, h, data, id, svg) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .1 * this.w;
		this.ID = id;
		this.svg = svg;
		this.options = data["options"];
		 
		this.bar1 = new myBar(this.x + this.w * .1, this.y + this.offset, this.w * .45,
							  this.h - this.offset * 2, data[0], "#6b4455", "#996461", id + "bar1", this.svg);
		this.bar2 = new myBar(this.x + this.w * .55, this.y + this.offset, this.w * .45,
							  this.h - this.offset * 2, data[1], "#6b4455", "#996461", id + "bar2", this.svg);

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", this.ID);
		svg.appendChild(this.chart);
	}

	drawButtons() {

	}

	draw () {
		drawButtons();
		this.bar1.drawBar();
		this.bar2.drawBar();
	}
}
