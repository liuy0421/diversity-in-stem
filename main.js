var svg1 = document.getElementById("svg1");
var svg2 = document.getElementById("svg2");
var svg3 = document.getElementById("svg3");
var svg4 = document.getElementById("svg4");
var svg5 = document.getElementById("svg5");
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

var dataBars = { "options": ["Biology", "Computer Science", "Math", "Chemistry", "Physics",
                             "Aerospace Engineering", "Mechanical Engineering", "Chemical Engineering",
                             "EECS Engineering", "Civil Engineering"],
                 "data": {"Biology": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 63000},
                                                  {"Gender": "Women", "Population": 44000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 52000},
                                                  {"Race": "Black", "Population": 48000},
                                                  {"Race": "Asian", "Population": 51000},
                                                  {"Race": "Latinx", "Population": 43000},
                                                  {"Race": "Other", "Population": 35000}]}],
                          "Computer Science": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 85000},
                                                  {"Gender": "Women", "Population": 69000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 85000},
                                                  {"Race": "Black", "Population": 70000},
                                                  {"Race": "Asian", "Population": 79000},
                                                  {"Race": "Latinx", "Population": 66000},
                                                  {"Race": "Indigenous", "Population": 79000},
                                                  {"Race": "Other", "Population": 65000}]}],
                           "Math": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 80000},
                                                  {"Gender": "Women", "Population": 52000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 72000},
                                                  {"Race": "Black", "Population": 50000},
                                                  {"Race": "Asian", "Population": 72000},
                                                  {"Race": "Latinx", "Population": 50000},
                                                  {"Race": "Other", "Population": 67000}]}],                     
                          "Chemistry": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 75000},
                                                  {"Gender": "Women", "Population": 52000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 70000},
                                                  {"Race": "Black", "Population": 47000},
                                                  {"Race": "Asian", "Population": 66000},
                                                  {"Race": "Latinx", "Population": 55000},
                                                  {"Race": "Other", "Population": 61000}]}],
                          "Physics": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 78000},
                                                  {"Gender": "Women", "Population": 50000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 78000},
                                                  {"Race": "Black", "Population": 58000},
                                                  {"Race": "Asian", "Population": 57000},
                                                  {"Race": "Latinx", "Population": 70000},
                                                  {"Race": "Other", "Population": 51000}]}],
                        "Aerospace Engineering": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 85000},
                                                  {"Gender": "Women", "Population": 94000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 92000},
                                                  {"Race": "Black", "Population": 104000},
                                                  {"Race": "Asian", "Population": 88000},
                                                  {"Race": "Latinx", "Population": 70000},
                                                  {"Race": "Other", "Population": 64000}]}],
                        "Mechanical Engineering": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 84000},
                                                  {"Gender": "Women", "Population": 70000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 85000},
                                                  {"Race": "Black", "Population": 69000},
                                                  {"Race": "Asian", "Population": 80000},
                                                  {"Race": "Latinx", "Population": 67000},
                                                  {"Race": "Indigenous", "Population": 59000},
                                                  {"Race": "Other", "Population": 74000}]}],
                        "Chemical Engineering": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 99000},
                                                  {"Gender": "Women", "Population": 79000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 98000},
                                                  {"Race": "Black", "Population": 80000},
                                                  {"Race": "Asian", "Population": 86000},
                                                  {"Race": "Other", "Population": 99000}]}],
                        "EECS Engineering": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 94000},
                                                  {"Gender": "Women", "Population": 83000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 98000},
                                                  {"Race": "Black", "Population": 78000},
                                                  {"Race": "Asian", "Population": 87000},
                                                  {"Race": "Latinx", "Population": 77000},
                                                  {"Race": "Other", "Population": 83000}]}],
                        "Civil Engineering": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 80000},
                                                  {"Gender": "Women", "Population": 63000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 80000},
                                                  {"Race": "Black", "Population": 74000},
                                                  {"Race": "Asian", "Population": 76000},
                                                  {"Race": "Latinx", "Population": 69000},
                                                  {"Race": "Other", "Population": 80000}]}],
                                                }
}

                [{"header": ["Gender" , "Population"],
                "values": [{"Gender": "Men", "Population": 22},
                       {"Gender": "Women", "Population": 7}]},
                {"header": ["Race" , "Population"],
                "values": [{"Race": "White", "Population": 22},
                       {"Race": "Black", "Population": 7},
                       {"Race": "Asian", "Population": 10},
                       {"Race": "Latinx", "Population": 15},
                       {"Race": "Multiracial", "Population": 30},
                       {"Race": "Other", "Population": 3}]}]


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
var bars = new twoBars(0, 0, 1000, 600, dataBars, "twobars-chart", svg5);
bars.draw();



// var circle = document.createElementNS(svgns, "circle");

 

// circle.setAttribute('cx', 100);
// circle.setAttribute('cy', 100);
// circle.setAttribute('r', 100);

// svg.appendChild(circle);