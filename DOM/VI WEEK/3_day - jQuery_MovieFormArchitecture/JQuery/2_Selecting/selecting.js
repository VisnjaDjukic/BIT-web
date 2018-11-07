$("li:first").css("border-bottom", "2px solid black");
$("li").css("text-transform", "uppercase");
$(".active").css("color", "red");

var middleNumber = (($("li").length) - 1) / 2;
$("li").eq(middleNumber).css("background-color", "blue");
