// var data = { "options": ["Facebook", "Twitter", "Github", "DeepMind"],
// 			 "labels": ["gender", "race"];
// 			 "categories": [{"gender": ["men", "women"]}, {"race": ["white", "black", "asian", "latinx", "other"]},
// 			 "Facebook": {"men": 80, "women": 50, "white": 100, "black": 20, "asian": 70, "latinx": 30, "other": 12},
// 			 "Twitter": {"men": 200, "women": 30, "white": 300, "black": 120, "asian": 20, "latinx": 10, "other": 16,
// 			 "Github": {"men": 80, "women": 15, "white": 10, "black": 10, "asian": 10, "latinx": 10, "other": 10},
// 			 "DeepMind": {"men": 6000, "women": 500, "white": 600, "black": 200, "asian": 140, "latinx": 130, "other": 50},
// };


class Dots {
	constructor(x, y, w, h, data, id) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = w * 0.05;
		this.ID = id;
		this.options = data["options"];
		this.labels = data["labels"];
		this.categories = data["categories"];
		this.data = {};
		this.intervalLeft = this.h / (this.options.length * 2);
		this.intervalRight = (this.h - this.offset * 4)/ (this.labels.length * 2);

		this.radiusLeft = this.intervalLeft * .7;
		this.radiusRight = this.radiusLeft;

		for (const option of this.options) {
			this.data[option] = data[option];

		}

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", this.ID);
		this.chart.setAttribute("selectedOpt", this.options[0]);
		this.chart.setAttribute("selectedLabel", this.labels[0]);

		svg.appendChild(this.chart);

	}

	drawButtons(){
		// left sidebar

		let yPos = this.y;
		let xPosLeft = this.x + this.offset / 2 + this.radiusLeft;
		let xPosRight = this.x + this.w - this.offset / 2 - this.radiusRight;

		for (const option of this.options) {
			yPos += this.intervalLeft;
			let circle = document.createElementNS(svgns, "circle");
			circle.setAttribute("cx", xPosLeft);
			circle.setAttribute("cy", yPos);
			circle.setAttribute("r", this.radiusLeft);

			circle.setAttribute("fill", 'blue');
			
			let c = this.chart;
			let opt = option;

			circle.addEventListener("click", function(event){
				c.setAttribute("selectedOpt", opt);
			
			    // c.setAttribute("selectedOpt", opt);
			    // if 
		    });

			circle.addEventListener("mouseover", function(event){
			    circle.setAttribute("fill-opacity", 0.5);
		    });

		    circle.addEventListener("mouseleave", function(event){
			    circle.setAttribute("fill-opacity", 1);
		    });

			this.chart.appendChild(circle);

			yPos += this.intervalLeft;
		}

		yPos = this.y + this.offset * 2;
		for (const label of this.labels) {
			yPos += this.intervalRight;
			let circle = document.createElementNS(svgns, "circle");
			circle.setAttribute("cx", xPosRight);
			circle.setAttribute("cy", yPos);
			circle.setAttribute("r", this.radiusRight);

			circle.setAttribute("fill", 'green');
			
			let c = this.chart;
			let l = label;

			circle.addEventListener("click", function(event){
				c.setAttribute("selectedLabel", l);
			
			    // c.setAttribute("selectedOpt", opt);
			    // if 
		    });

			circle.addEventListener("mouseover", function(event){
			    circle.setAttribute("fill-opacity", 0.5);
		    });

		    circle.addEventListener("mouseleave", function(event){
			    circle.setAttribute("fill-opacity", 1);
		    });

			this.chart.appendChild(circle);

			yPos += this.intervalRight;
		}
	}

	draw(){
		this.drawButtons();

		let c_width = this.w - this.offset - this.radiusLeft * 4,
			c_height = (this.h - this.offset * 2) ,
			c_interval = c_height / 20,
			c_x = this.x + this.offset /2 + this.radiusLeft * 2 + (c_width - c_height)/2,
			c_y = this.y + this.offset,
			
			c_radius = c_interval * .8;


		for (let i = 0 ; i < 100; i++) {
			let row = Math.floor(i /10), col = i % 10,
				x_pos = c_x + c_interval * (2 * row + 1),
				y_pos = c_y + c_interval * (2 * col + 1);

			let circle = document.createElementNS(svgns, "circle");
			circle.setAttribute("cx", x_pos);
			circle.setAttribute("cy", y_pos);
			circle.setAttribute("r", c_radius);

			circle.setAttribute("fill", 'black');

			this.chart.appendChild(circle);
		}






	}
}