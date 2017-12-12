var svg1 = document.getElementById("svg1");
var svg2 = document.getElementById("svg2");
var svg3 = document.getElementById("svg3");
var svg4 = document.getElementById("svg4");
var svgns = "http://www.w3.org/2000/svg";
 

var data = {"header": ["Gender" , "Population"],
            "values": [{"Gender": "Men", "Population": 22},
                       {"Gender": "Women", "Population": 7}]};

var dataPie = {"header": ["Women", "Men", "Major" , "Population"],
            	   "Men": [{"Major": "Biology", "Population": 503000},
                       	 {"Major": "Computer Science", "Population": 792000},
                       	 {"Major": "Math", "Population": 284000}, 
                       	 {"Major": "Chemistry", "Population": 153000}, 
                       	 {"Major": "Physics", "Population": 85000},
                         {"Major": "Aerospace Engineering", "Population": 84000},
                         {"Major": "Mechanical Engineering", "Population": 481000},
                         {"Major": "Chemical Engineering", "Population": 126000},
                         {"Major": "EECS Engineering", "Population": 650000},
                         {"Major": "Civil Engineering", "Population": 306000}],
                "Women": [{"Major": "Biology", "Population": 700000},
                       	 {"Major": "Computer Science", "Population": 287000},
                       	 {"Major": "Math", "Population": 196000}, 
                       	 {"Major": "Chemistry", "Population": 106000}, 
                       	 {"Major": "Physics", "Population": 15000},
                         {"Major": "Aerospace Engineering", "Population": 8000},
                         {"Major": "Mechanical Engineering", "Population": 41000},
                         {"Major": "Chemical Engineering", "Population": 46000},
                         {"Major": "EECS Engineering", "Population": 88000},
                         {"Major": "Civil Engineering", "Population": 57000}]};


// data from tech companies
// https://docs.google.com/spreadsheets/u/1/d/1e5jevLJTK9Aayob2msk4Ss9qIMCqfris4m_m0kXO-7s/edit#gid=1925490147
var techDotsData = { "options": ["Facebook", "Google", "Twitter", "Uber", "Amazon", "Apple", "Microsoft"],
       "labels": ["Gender", "Race"],
       "categories": {"Gender": ["Male", "Female"], "Race": ["White", "Black", "Asian", "Latinx", "Multiracial", "Other"]},
       "Facebook": {"Male": 67, "Female": 33, "White": 53, "Black": 2, "Asian": 38, "Latinx": 4, "Multiracial": 3, "Other": 0},//
       "Google": {"Male": 69, "Female": 31, "White": 59, "Black": 2, "Asian": 32, "Latinx": 3, "Multiracial": 3, "Other": 1},//
       "Twitter": {"Male": 70, "Female": 30, "White": 59, "Black": 2, "Asian": 29, "Latinx": 3, "Multiracial": 3, "Other": 4},//
       "Uber": {"Male": 64, "Female": 36, "White": 50, "Black": 9, "Asian": 31, "Latinx": 6, "Multiracial": 4, "Other": 1},//
       "Amazon": {"Male": 63, "Female": 37, "White": 60, "Black": 15, "Asian": 13, "Latinx": 9, "Multiracial": 0,"Other": 3},//
       "Apple": {"Male": 70, "Female": 30, "White": 62, "Black": 10, "Asian": 21, "Latinx": 13, "Multiracial": 2,"Other": 1},//
       "Microsoft": {"Male": 72, "Female": 28, "White": 59, "Black": 4, "Asian": 29, "Latinx": 5, "Multiracial": 1,"Other": 1}//
};

// data from fatherly.com
var totsTotsData = { "options": ["Boys", "Girls"],
       "labels": ["Careers"],
       "categories": {"Careers": ["STEM Careers", "Non-STEM Careers"]},
       "Boys": {"STEM Careers": 32, "Non-STEM Careers": 68},//
       "Girls": {"STEM Careers": 41, "Non-STEM Careers": 59}
};

var w = document.getElementById("svg1").getAttribute("width");
console.log(w);
var h = document.getElementById("svg1").getAttribute("height");
console.log(h);

// w = 800;

var bar = new myBar(0, 0, w, h, data, "#6b4455", "#996461", "bar-chart", svg1);
bar.drawBar();
var pies = new coordinatedPie(0, 0, w, 600, dataPie, "pie-chart", svg2);
pies.drawPie();
var dots = new Dots(0, 0, w, 500, techDotsData, "dots-chart", svg3, true);
dots.draw();

var dots2 = new Dots(0, 0, w, 500, totsTotsData, "dots2-chart", svg4, false);
dots2.draw();




// var circle = document.createElementNS(svgns, "circle");

 

// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);