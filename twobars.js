class twoBars {

	constructor (x, y, w, h, data, id, svg, money) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .05 * this.w;
		this.ID = id;
		this.svg = svg;
		this.options = data["options"];
		this.selectedOpt = data["options"][0];
		this.data = data["data"];

		this.colors = ['#8AD5E0','#F78E21', '#8DA153', '#C8B87F', '#FCC800', '#ED8B7C', 
					   '#9FCADD','#FDCBBB', '#C7DD34', '#62A1AE', '#7E30A1'];

		this.hover = ["#c4e7ed", '#f4c38d', "#d2ef7a", "#e2d9b5", "#fce68d", "#eab7af", 
		              '#B0D3E3', '#FDDDD3', '#DBE97D', '#9BC3CB', '#AC7BC3'];
		 
		this.bar1 = new myBar(this.x + this.w * .2, this.y, this.w * .4,
							  this.h - this.offset, this.data[this.selectedOpt][0], this.colors[0], this.hover[0], id + "bar1", this.svg, money);
		this.bar2 = new myBar(this.x + this.w * .6, this.y, this.w * .4,
							  this.h - this.offset, this.data[this.selectedOpt][1], this.colors[0], this.hover[0], id + "bar2", this.svg, money);


	

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", this.ID);
		this.buttons = document.createElementNS(svgns, "g");
		this.chart.appendChild(this.buttons);
		svg.appendChild(this.chart);
	}

	drawButtons() {
		this.chart.removeChild(this.buttons);
		let xpos = this.x + this.offset /3;
		let width = this.w * .17;

		let interval = (this.h - this.offset * 2) / this.options.length;
		let radius = interval * .8 / 2;
		let height = interval *.6;
		let ypos = this.y + this.offset  * .6;

		let option;
		let i = 0;
		for (const option of this.options) {

			let rect = document.createElementNS(svgns, "rect");
			rect.setAttribute("x", xpos);
			rect.setAttribute("y", ypos);
			rect.setAttribute("height", height);
			rect.setAttribute("width", width);
			if (option != this.selectedOpt) {
				rect.setAttribute("fill", this.hover[i]);
			} else {
				rect.setAttribute("fill", this.colors[i]);
			}

			let textLabel = document.createElementNS(svgns, "text");
			textLabel.setAttribute("x", xpos + width / 2);
			textLabel.setAttribute("y", ypos + 5 +  height / 2);
			if (option != this.selectedOpt) {
				textLabel.setAttribute("opacity", 0.2);
			}
			let textNode = document.createTextNode(option);
			textLabel.appendChild(textNode);

			this.buttons.appendChild(rect);
			this.buttons.appendChild(textLabel);

			let hover = this.hover[i];
			let color = this.colors[i];
			let bar1 = this.bar1;
			let bar2 = this.bar2;
			let opt = option;
			let s = this;
			let d = this.data;

			rect.addEventListener("click", function(event) {
				s.selectedOpt = opt;
				bar1.setColors(color, hover);
				bar2.setColors(color, hover);
				bar1.setData(d[opt][0]);
				bar2.setData(d[opt][1]);
				s.draw();
			});
			
			rect.addEventListener("mouseover", function(event){
				if (option != s.selectedOpt) {
					s.buttons.removeChild(textLabel);
					textLabel.setAttribute("opacity", 1);
					s.buttons.appendChild(textLabel);
			    	rect.setAttribute("fill", color);
			    }
		    });

			rect.addEventListener("mouseleave", function(event){
				if (option != s.selectedOpt) {
					s.buttons.removeChild(textLabel);
					textLabel.setAttribute("opacity", 0.2);
					s.buttons.appendChild(textLabel);
					rect.setAttribute("fill", hover);
				}
			});

			ypos += interval;
			i++;
		}
		this.chart.appendChild(this.buttons);

	}

	draw () {
		this.drawButtons();
		this.bar1.draw();
		this.bar2.draw();
	}
}
