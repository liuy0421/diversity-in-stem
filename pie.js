// var dataPie = {"header": ["Women", "Men", "Major" , "Population"],
//             	  "Men": [{"Major": "CS", "Population": 22},
//                        	 {"Major": "ChemE", "Population": 7},
//                        	 {"Major": "Architectural Studies", "Population": 3}],
//                 "Women": [{"Major": "CS", "Population": 25},
//                        	 {"Major": "ChemE", "Population": 6},
//                        	 {"Major": "Architectural Studies", "Population": 1}]};

class coordinatedPie {
	constructor(x, y, w, h, data, id) {
		this.x = x;
		this.y = y;
		this.w = w;
		this.h = h;
		this.offset = .05 * this.w;
		this.strokeWidth = "1.5";
		this.label1 = data["header"][0];
		this.label2 = data["header"][1];
		this.categoryName = data["header"][2];
		this.valueName = data["header"][3];
		this.data1 = data[this.label1];
		this.data2 = data[this.label2];
		this.ID = id;
		this.radius = (this.w / 2 - this.offset * 2) / 2;
		this.cx1 = this.x + this.offset + this.radius;
		this.cx2 = this.x + this.w - (this.offset + this.radius);
		this.cy = this.y + this.h / 2;

		this.total1 = this.data1.reduce(function(acc, point) {
			return (point[data["header"][3]] + acc);
		}, 0);

		this.total2 = this.data2.reduce(function(acc, point) {
			return (point[data["header"][3]] + acc);
		}, 0);

		this.chart = document.createElementNS(svgns, "g");
		this.chart.setAttribute("id", this.ID);
		svg.appendChild(this.chart);
		this.path1 = this.calculatePaths(this.data1, this.cx1, this.cy, this.total1, this.label1);
		this.path2 = this.calculatePaths(this.data2, this.cx2, this.cy, this.total2, this.label2);

		console.log(this.data1);
	}

	calculatePaths(data, cx, cy, total, label) {
		var paths = [];
		var curX = cx + this.radius;
		var curY = cy;
		var nextX, nextY;
		var quadrant = 0;
		var curAngle = 0; // randians
		var large;
		console.log(data);

		for (var i = 0; i < data.length; i++) {
			var angle = data[i][this.valueName] * 2 * Math.PI / total;
			large = angle > Math.PI ? 1 : 0;
			curAngle += angle;
			quadrant = Math.floor(curAngle / (Math.PI / 2));
			console.log(quadrant);
			var remainder = curAngle % (quadrant * Math.PI/2);
			switch (quadrant) {
				case 0:
					nextX = cx + this.radius * Math.cos(remainder);
					nextY = cy + this.radius * Math.sin(remainder);
					break;
				case 1:
					nextX = cx - this.radius * Math.sin(remainder);
					nextY = cy + this.radius * Math.cos(remainder);
					break;
				case 2:
					nextX = cx - this.radius * Math.cos(remainder);
					nextY = cy - this.radius * Math.sin(remainder);
					break;
				case 3:
					nextX = cx + this.radius * Math.sin(remainder);
					nextY = cy - this.radius * Math.cos(remainder);
					break;
				case 4:
					nextX = cx + this.radius;
					nextY = cy;
					break;
			}
			var path = "M" + cx + "," + cy + " L" + curX + "," + curY + " A" +
					   this.radius + "," + this.radius + " 0 " + large + ",1 " +
					   nextX + "," + nextY + " z";
			paths.push(path);
			curX = nextX;
			curY = nextY;
		}

		return paths;
	}

	drawPie () {
		console.log(this.path1);
		for (var i = 0; i < this.path1.length; i++) {
			let path = document.createElementNS(svgns, "path");
			path.setAttribute("d", this.path1[i]);
			path.setAttribute("stroke", "black");
			path.setAttribute("fill", "blue");
			path.setAttribute("id", i);
			this.chart.appendChild(path);
		}

		for (var i = 0; i < this.path2.length; i++) {
			let path = document.createElementNS(svgns, "path");
			path.setAttribute("d", this.path2[i]);
			path.setAttribute("stroke", "black");
			path.setAttribute("fill", "blue");
			path.setAttribute("id", i);
			this.chart.appendChild(path);
		}

	}
}