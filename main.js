var svg = document.getElementById("mySvg");
var svgns = "http://www.w3.org/2000/svg";
 

var data = {"header": ["Gender" , "Population"],
            "values": [{"Gender": "Men", "Population": 22},
                       {"Gender": "Women", "Population": 7}]};

var dataPie = {"header": ["Women", "Men", "Major" , "Population"],
            	"Men": [{"Major": "CS", "Population": 22},
                       	 {"Major": "ChemE", "Population": 7},
                       	 {"Major": "Architectural Studies", "Population": 3}, 
                       	 {"Major": "BioPsych", "Population": 6}, 
                       	 {"Major": "Math", "Population": 20}],
                "Women": [{"Major": "CS", "Population": 25},
                       	 {"Major": "ChemE", "Population": 6},
                       	 {"Major": "Architectural Studies", "Population": 1}, 
                       	 {"Major": "BioPsych", "Population": 30}, 
                       	 {"Major": "Math", "Population": 15}]};

var dotsData = { "options": ["Facebook", "Twitter", "Github", "DeepMind"],
       "labels": ["Gender", "Race"],
       "categories": {"Gender": ["men", "women"], "Race": ["white", "black", "asian", "latinx", "other"]},
       "Facebook": {"men": 80, "women": 50, "white": 100, "black": 20, "asian": 70, "latinx": 30, "other": 12},
       "Twitter": {"men": 200, "women": 30, "white": 300, "black": 120, "asian": 20, "latinx": 10, "other": 16},
       "Github": {"men": 80, "women": 15, "white": 10, "black": 10, "asian": 10, "latinx": 10, "other": 10},
       "DeepMind": {"men": 6000, "women": 500, "white": 600, "black": 200, "asian": 140, "latinx": 130, "other": 50},
};

var w = document.getElementById("mySvg").getAttribute("width");
console.log(w);
var h = document.getElementById("mySvg").getAttribute("height");
console.log(h);

var bar = new myBar(w, h, 800, 500, data, "#6b4455", "#996461", "bar-chart");
// bar.drawBar(svg);
var pies = new coordinatedPie(0, 0, w, h, dataPie, "pie-chart");
//pies.drawPie();
var dots = new Dots(0, 0, w, h, dotsData, "dots-chart");
dots.draw();


// var circle = document.createElementNS(svgns, "circle");

 

// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);