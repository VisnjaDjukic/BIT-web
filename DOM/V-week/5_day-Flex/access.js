var list = document.querySelector('li').childNodes[0].nodeValue;
// var list = document.querySelector('li').firstChild.nodeValue;
alert(list);

var fun = function (newText) {

    var nesto = document.querySelector('ul').children[1];
    nesto.childNodes[0].nodeValue = newText;
}
fun('Hej');