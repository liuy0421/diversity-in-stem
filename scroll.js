// Only enable scrollify if screen has sufficient landscape width
// Otherwise page scrolling gets messed up when going from 2x2 to single column
if ($(window).width() / $(window).height() > 3/2) {
    $.scrollify({
        section: ".scroll"
    });
}

var selected = "#landing-page-button"
var yellow = "#FCC800";
var blue = "#1d3b6b";

$(selected).css("background", yellow);

$("button").mouseover(function() {
    $(this).css("background", yellow);
    $("#" + this.id + "-text").css("opacity", 1);
});

$("button").mouseout(function() {
    if ("#" + this.id != selected) {
        $(this).css("background", blue);
    }
   $("#" + this.id + "-text").css("opacity", 0); 
});


$('#landing-page-button').click(function() {
    $.scrollify.move('#1');
    $(selected).css("background", blue);
    selected = '#landing-page-button';
    $(selected).css("background", yellow);
});

$('#intro-button').click(function() {
    $.scrollify.move('#2');
    $(selected).css("background", blue);
    selected = '#intro-button';
    $(selected).css("background", yellow);
});

$('#top-tech-button').click(function() {
    $.scrollify.move('#3');
    $(selected).css("background", blue);
    selected = '#top-tech-button';
    $(selected).css("background", yellow);
});

$('#salary-button').click(function() {
    $.scrollify.move('#4');
    $(selected).css("background", blue);
    selected = '#salary-button';
    $(selected).css("background", yellow);
});

$('#gender-diff-button').click(function() {
    $.scrollify.move('#5');
    $(selected).css("background", blue);
    selected = '#gender-diff-button';
    $(selected).css("background", yellow);
});

$('#kids-button').click(function() {
    $.scrollify.move('#6');
    $(selected).css("background", blue);
    selected = '#kids-button';
    $(selected).css("background", yellow);
});

$('#majors-button').click(function() {
    $.scrollify.move('#7');
    $(selected).css("background", blue);
    selected = '#majors-button';
    $(selected).css("background", yellow);
});

$('#degrees-button').click(function() {
    $.scrollify.move('#8');
    $(selected).css("background", blue);
    selected = '#degrees-button';
    $(selected).css("background", yellow);
});

$('#conclusion-button').click(function() {
    $.scrollify.move('#9');
    $(selected).css("background", blue);
    selected = '#conclusion-button';
    $(selected).css("background", yellow);
});

$('#sources-button').click(function() {
    $.scrollify.move('#10');
    $(selected).css("background", blue);
    selected = '#sources-button';
    $(selected).css("background", yellow);
    $(seclected + ":hover").css("background", blue);
});
