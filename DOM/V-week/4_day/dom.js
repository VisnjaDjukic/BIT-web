var colorRed = function () {
    var ulSecond = document.documentElement.children[1].children[1];
    ulSecond.className = 'ulSecond';
}

colorRed();

var selectAll = function () {
    var elementLi = document.querySelectorAll("li")

    for (var i = 0; i < elementLi.length; i++) {
        elementLi[i].className = "colorYellow";
    }
}

selectAll();

// var newList = function () {
//     var newLi = document.documentElement.children[1].children[2].querySelectorAll('li');

//     for (var i = 0; i < newLi.length; i++) {
//         document.documentElement.children[1].children[2].children[i].className = "colorGreen";
//     }
// }
// newList();


var newList2 = function () {
    var nesto = document.getElementById('thirdList');
    var newLi2 = nesto.querySelectorAll('li');
    for (var i = 0; i < newLi2.length; i++) {
        nesto.children[i].className = "colorGreen";
    }
}
newList2();