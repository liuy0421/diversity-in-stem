var topTechSVG = document.getElementById("top-tech-graph");
var salaryBarSVG = document.getElementById("salary-bar-graph");
var kidsSVG = document.getElementById("kids-graph");
var majorSVG = document.getElementById("college-major-graph");
var degreeBarSVG = document.getElementById("degree-bar-graph");
// var svg3 = document.getElementById("svg3");
// var svg4 = document.getElementById("svg4");
// var svg5 = document.getElementById("svg5");
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
                 "data": {"Biology": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 63000},
                                                  {"Gender": "Women", "Salary": 44000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 52000},
                                                  {"Race": "Black", "Salary": 48000},
                                                  {"Race": "Asian", "Salary": 51000},
                                                  {"Race": "Latinx", "Salary": 43000},
                                                  {"Race": "Other", "Salary": 35000}]}],
                          "Computer Science": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 85000},
                                                  {"Gender": "Women", "Salary": 69000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 85000},
                                                  {"Race": "Black", "Salary": 70000},
                                                  {"Race": "Asian", "Salary": 79000},
                                                  {"Race": "Latinx", "Salary": 66000},
                                                  {"Race": "Indigenous", "Salary": 79000},
                                                  {"Race": "Other", "Salary": 65000}]}],
                           "Math": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 80000},
                                                  {"Gender": "Women", "Salary": 52000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 72000},
                                                  {"Race": "Black", "Salary": 50000},
                                                  {"Race": "Asian", "Salary": 72000},
                                                  {"Race": "Latinx", "Salary": 50000},
                                                  {"Race": "Other", "Salary": 67000}]}],                     
                          "Chemistry": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 75000},
                                                  {"Gender": "Women", "Salary": 52000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 70000},
                                                  {"Race": "Black", "Salary": 47000},
                                                  {"Race": "Asian", "Salary": 66000},
                                                  {"Race": "Latinx", "Salary": 55000},
                                                  {"Race": "Other", "Salary": 61000}]}],
                          "Physics": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 78000},
                                                  {"Gender": "Women", "Salary": 50000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 78000},
                                                  {"Race": "Black", "Salary": 58000},
                                                  {"Race": "Asian", "Salary": 57000},
                                                  {"Race": "Latinx", "Salary": 70000},
                                                  {"Race": "Other", "Salary": 51000}]}],
                        "Aerospace Engineering": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 85000},
                                                  {"Gender": "Women", "Salary": 94000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 92000},
                                                  {"Race": "Black", "Salary": 104000},
                                                  {"Race": "Asian", "Salary": 88000},
                                                  {"Race": "Latinx", "Salary": 70000},
                                                  {"Race": "Other", "Salary": 64000}]}],
                        "Mechanical Engineering": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 84000},
                                                  {"Gender": "Women", "Salary": 70000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 85000},
                                                  {"Race": "Black", "Salary": 69000},
                                                  {"Race": "Asian", "Salary": 80000},
                                                  {"Race": "Latinx", "Salary": 67000},
                                                  {"Race": "Indigenous", "Salary": 59000},
                                                  {"Race": "Other", "Salary": 74000}]}],
                        "Chemical Engineering": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 99000},
                                                  {"Gender": "Women", "Salary": 79000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 98000},
                                                  {"Race": "Black", "Salary": 80000},
                                                  {"Race": "Asian", "Salary": 86000},
                                                  {"Race": "Other", "Salary": 99000}]}],
                        "EECS Engineering": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 94000},
                                                  {"Gender": "Women", "Salary": 83000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 98000},
                                                  {"Race": "Black", "Salary": 78000},
                                                  {"Race": "Asian", "Salary": 87000},
                                                  {"Race": "Latinx", "Salary": 77000},
                                                  {"Race": "Other", "Salary": 83000}]}],
                        "Civil Engineering": [{"header": ["Gender" , "Salary"],
                                       "values": [{"Gender": "Men", "Salary": 80000},
                                                  {"Gender": "Women", "Salary": 63000}]},
                                      {"header": ["Race" , "Salary"],
                                       "values": [{"Race": "White", "Salary": 80000},
                                                  {"Race": "Black", "Salary": 74000},
                                                  {"Race": "Asian", "Salary": 76000},
                                                  {"Race": "Latinx", "Salary": 69000},
                                                  {"Race": "Other", "Salary": 80000}]}],
                                                }
};

               


// data from tech companies
// https://docs.google.com/spreadsheets/u/1/d/1e5jevLJTK9Aayob2msk4Ss9qIMCqfris4m_m0kXO-7s/edit#gid=1925490147
var techDotsData = { "options": ["Facebook", "Google", "Twitter", "Uber", "Amazon", "Apple", "Microsoft", "USA"],
       "labels": ["Gender", "Race"],
       "categories": {"Gender": ["Male", "Female"], "Race": ["White", "Black", "Asian", "Latinx", "Multiracial", "Other"]},
       "Facebook": {"Male": 67, "Female": 33, "White": 53, "Black": 2, "Asian": 38, "Latinx": 4, "Multiracial": 3, "Other": 0},//
       "Google": {"Male": 69, "Female": 31, "White": 59, "Black": 2, "Asian": 32, "Latinx": 3, "Multiracial": 3, "Other": 1},//
       "Twitter": {"Male": 70, "Female": 30, "White": 59, "Black": 2, "Asian": 29, "Latinx": 3, "Multiracial": 3, "Other": 4},//
       "Uber": {"Male": 64, "Female": 36, "White": 50, "Black": 9, "Asian": 31, "Latinx": 6, "Multiracial": 4, "Other": 1},//
       "Amazon": {"Male": 63, "Female": 37, "White": 60, "Black": 15, "Asian": 13, "Latinx": 9, "Multiracial": 0,"Other": 3},//
       "Apple": {"Male": 70, "Female": 30, "White": 62, "Black": 10, "Asian": 21, "Latinx": 13, "Multiracial": 2,"Other": 1},//
       "Microsoft": {"Male": 72, "Female": 28, "White": 59, "Black": 4, "Asian": 29, "Latinx": 5, "Multiracial": 1,"Other": 1},//
       "USA": {"Male": 49, "Female": 51, "White": 64, "Black": 12, "Asian": 4, "Latinx": 16, "Multiracial": 1,"Other": 3}

};

// data from fatherly.com
var totsTotsData = { "options": ["Boys", "Girls"],
       "labels": ["Careers"],
       "categories": {"Careers": ["STEM Careers", "Non-STEM Careers"]},
       "Boys": {"STEM Careers": 32, "Non-STEM Careers": 68},//
       "Girls": {"STEM Careers": 41, "Non-STEM Careers": 59}
};


var degreeBarsData = { "options": ["Bachelor's", "Master's", "Doctorate"],
                 "data": {"Bachelor's": [{"header": ["Gender" , "Population"],
                                     "values": [{"Gender": "Men", "Population": 7275000},
                                                  {"Gender": "Women", "Population": 6156000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 9784000},
                                                  {"Race": "Black", "Population": 857000},
                                                  {"Race": "Asian", "Population": 1355000},
                                                  {"Race": "Latinx", "Population": 1123000},
                                                  {"Race": "Indigenous", "Population": 46000},
                                                  {"Race": "Other", "Population": 267000}]}],
                          "Master's": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 3381000},
                                                  {"Gender": "Women", "Population": 3501000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 4977000},
                                                  {"Race": "Black", "Population": 488000},
                                                  {"Race": "Asian", "Population": 845000},
                                                  {"Race": "Latinx", "Population": 445000},
                                                  {"Race": "Indigenous", "Population": 16000},
                                                  {"Race": "Other", "Population": 111000}]}],
                           "Doctorate": [{"header": ["Gender" , "Population"],
                                       "values": [{"Gender": "Men", "Population": 741000},
                                                  {"Gender": "Women", "Population": 413000}]},
                                      {"header": ["Race" , "Population"],
                                       "values": [{"Race": "White", "Population": 795000},
                                                  {"Race": "Black", "Population": 47000},
                                                  {"Race": "Asian", "Population": 239000},
                                                  {"Race": "Latinx", "Population": 51000},
                                                  {"Race": "Indigenous", "Population": 4000},
                                                  {"Race": "Other", "Population": 18000}]}]}};


var dotIds = ["#landing-page-button", "#intro-button", "#top-tech-button", 
              "#salary-button", "#gender-diff-button", "#kids-button", 
              "#majors-button", "#degrees-button", "#conclusion-button", 
              "#sources-button"];

var techDots, salaryBar, techTotsDots, collegePie, degreeBar;

var height = $(window).height(); 
var width = $(window).width();
console.log(height);
console.log(width);
console.log(window.pageYOffset);

$(window).resize(function() {
    height = $(window).height(); 
    width = $(window).width(); 
    // console.log(height);
    // console.log(width);
    updateGraphs();
});


drawGraphs();

function drawGraphs() {
    techDots = new Dots(0, 0, width * .8, height * .7, techDotsData, "tech-dots-chart", topTechSVG, true);
    techDots.draw();

    var w2 = document.getElementById("salary-bar-graph").getAttribute("width");
    var h2 = document.getElementById("salary-bar-graph").getAttribute("height");
    var salaryBar = new twoBars(0,0, w2, h2, dataBars, "salary-bar-graph", salaryBarSVG, true);
    salaryBar.draw();

    var w3 = document.getElementById("kids-graph").getAttribute("width");
    var h3 = document.getElementById("kids-graph").getAttribute("height");
    var techTotsDots = new Dots(0, 0, w3, h3, totsTotsData, "kids-chart", kidsSVG, false);
    techTotsDots.draw();

    var w4 = document.getElementById("college-major-graph").getAttribute("width");
    var h4 = document.getElementById("college-major-graph").getAttribute("height");
    var collegePie = new coordinatedPie(0, 0, w4, h4, dataPie, "college-major-chart", majorSVG);
    collegePie.drawPie();

    var w5 = document.getElementById("degree-bar-graph").getAttribute("width");
    var h5 = document.getElementById("degree-bar-graph").getAttribute("height");
    var degreeBar = new twoBars(0,0, w5, h5, degreeBarsData, "degree-bar-graph", degreeBarSVG, false);
    degreeBar.draw();
}



function updateGraphs(){
    techDots.updateSize(width * .8, height * .7);
}
