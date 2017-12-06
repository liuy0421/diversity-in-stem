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

var bar = new myBar(0, 0, 800, 500, data, "#6b4455", "#996461", "bar-chart");
//bar.drawBar(svg);
var pies = new coordinatedPie(0, 0, 800, 500, dataPie, "pie-chart");
pies.drawPie();

// var circle = document.createElementNS(svgns, "circle");



// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);