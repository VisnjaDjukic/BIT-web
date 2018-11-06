/*function createSelect(array, node) {
    var selectString = '<select>';

    for (var i = 0; i < array.length; i++) {

        selectString += '<option>' + array[i] + '</option>' + '\n';
    }

    node.innerHTML += selectString + '</select>';

}

var niz = [1, 2, 3, 4];
var specialDiv = document.querySelector('.special');

createSelect(niz, specialDiv);
*/

// document.querySelector('div:last-of-type').textContent = 'tralalalala';







function createSelectDom(array, node) {
    var miraSelect = document.createElement('select');

    for (var i = 0; i < array.length; i++) {

        var opt = document.createElement('option');
        var optContent = document.createTextNode(array[i]);
        opt.appendChild(optContent);
        miraSelect.appendChild(opt);
    }

    node.appendChild(miraSelect);

}

createSelectDom(['jedan', 'dva', 'tri'], document.querySelector('div'));

createSelectDom(['crvena', 'plava', 'zuta'], document.querySelector('div:last-of-type'));
