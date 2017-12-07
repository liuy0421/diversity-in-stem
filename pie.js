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
		this.strokeWidth = "2";
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
		this.textBox1 = document.createElementNS(svgns, "text");
		this.textBox2 = document.createElementNS(svgns, "text");
		this.majorLabel = document.createElementNS(svgns, "text");

		this.textBox1.setAttribute('id', 'pieText1');
		this.textBox2.setAttribute('id', 'pieText2');
		this.majorLabel.setAttribute('id', 'pieMajor');

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

		// console.log(this.data1);

		// this.colors = ["#FF785A", "#FFC145", "#0FA3B1", "#456990", "#FFB86F"];
		this.colors = ["#8AD5E0", "#C2DDCC", "#EAE6BC", "#F78E21", "#FC7000", "#ED8B7C", "#9FCADD", 
						"#FDCBBB", "#C7DD34", "#62A1AE", "#EF3791", "#D8AC29", "#F4B4B0"];

	}

	drawLabels () {
		var interval = (this.w - this.offset) / this.data1.length;
		var curX = this.x + 2 * this.offset;

		for (let i = 0; i < this.data1.length; i++) {
			let l = document.createElementNS(svgns, "text");
			l.setAttribute('x', curX);
			l.setAttribute('y', this.y + this.h - this.offset);	
			l.setAttribute('fill', this.colors[i]);

			let t = document.createTextNode(this.data1[i][this.categoryName]);
			l.appendChild(t);
			this.chart.appendChild(l);

			curX += interval;
		}


	}

	calculatePaths(data, cx, cy, total, label) {
		var paths = [];
		var curX = cx + this.radius;
		var curY = cy;
		var nextX, nextY;
		var quadrant = 0;
		var curAngle = 0; // randians
		var large;
		// console.log(data);

		for (var i = 0; i < data.length; i++) {
			var angle = data[i][this.valueName] * 2 * Math.PI / total;
			large = angle > Math.PI ? 1 : 0;
			curAngle += angle;
			quadrant = Math.floor(curAngle / (Math.PI / 2));
			// console.log(quadrant);
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

		this.drawLabels();

		let labelP1 = document.createElementNS(svgns, "text");
		labelP1.setAttribute('x', this.cx1);
		labelP1.setAttribute('y', this.y + this.offset * 1.5);	

		let textNode1 = document.createTextNode(this.label1);
		labelP1.appendChild(textNode1);
		this.chart.appendChild(labelP1);

		let labelP2 = document.createElementNS(svgns, "text");
		labelP2.setAttribute('x', this.cx2);
		labelP2.setAttribute('y', this.y + this.offset * 1.5);	

		let textNode2 = document.createTextNode(this.label2);
		labelP2.appendChild(textNode2);
		this.chart.appendChild(labelP2);

		let box1 = this.textBox1;
		let box2 = this.textBox2;
		let xpos1 = this.x + this.offset * 0.5;
		let xpos2 = this.x + this.w - this.offset * 0.5;
		let ypos = this.y + this.h / 2;

		// console.log(this.path1);
		for (let i = 0; i < this.path1.length; i++) {
			let path = document.createElementNS(svgns, "path");
			path.setAttribute("d", this.path1[i]);
			path.setAttribute("stroke", "white");
			path.setAttribute("fill", this.colors[i]);
			path.setAttribute("id", "1-" + i);

			let path2 = this.path2;
			let number1 = this.data1[i][this.valueName];
			let number2 = this.data2[i][this.valueName];
			let tnode1 = document.createTextNode(number1);
			let tnode2 = document.createTextNode(number2);
			//box1.setAttribute('fill', this.colors[i]);
			let c = this.chart;

			path.addEventListener("mouseover", function(event){
			    path.setAttribute("fill-opacity", 0.5);
			    box1.setAttribute('x', xpos1);
			    box1.setAttribute('y', ypos);
			    box2.setAttribute('x', xpos2);
			    box2.setAttribute('y', ypos);
			    box1.appendChild(tnode1);
			    box2.appendChild(tnode2);
			    c.appendChild(box1);
			    c.appendChild(box2);

			    for (var j = 0; j < path2.length; j++) {
			    	let path2 = document.getElementById("2-" + j);
			    	if (path2["id"] == "2-" + i) {
			    		path2.setAttribute("fill-opacity", 0.5);
			    	}
			    }
		    });

			path.addEventListener("mouseleave", function(event){
				// console.log(event);
				path.setAttribute("fill-opacity", 1);

				box1.removeChild(tnode1);
				c.removeChild(box1);
				box2.removeChild(tnode2);
				c.removeChild(box2);

				for (var j = 0; j < path2.length; j++) {
			    	let path2 = document.getElementById("2-" + j);
			    	if (path2["id"] == "2-" + i) {
			    		path2.setAttribute("fill-opacity", 1);
			    	}
			    }
			});

			this.chart.appendChild(path);
		}


		for (let i = 0; i < this.path2.length; i++) {
			let path = document.createElementNS(svgns, "path");
			path.setAttribute("d", this.path2[i]);
			path.setAttribute("stroke", "white");
			path.setAttribute("fill", this.colors[i]);
			path.setAttribute("id", "2-" + i);

			let path1 = this.path1;
			
			let number = this.data2[i][this.valueName];
			let tnode = document.createTextNode(number);
			let c = this.chart;

			path.addEventListener("mouseover", function(event){
			    path.setAttribute("fill-opacity", 0.5);
			    
			    box2.setAttribute('x', xpos2);
			    box2.setAttribute('y', ypos);
				box2.appendChild(tnode);
				c.appendChild(box2);

			    for (var j = 0; j < path1.length; j++) {
			    	let path1 = document.getElementById("1-" + j);
			    	if (path1["id"] == "1-" + i) {
			    		path1.setAttribute("fill-opacity", 0.5);
			    	}
			    }

		    });

			path.addEventListener("mouseleave", function(event){
				// console.log(event);
				path.setAttribute("fill-opacity", 1);

				box2.removeChild(tnode);
				c.removeChild(box2);

				for (var j = 0; j < path1.length; j++) {
			    	let path1 = document.getElementById("1-" + j);
			    	if (path1["id"] == "1-" + i) {
			    		path1.setAttribute("fill-opacity", 1);
			    	}
			    }
			});

			this.chart.appendChild(path);
		}
	}
}




