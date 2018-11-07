$image = document.querySelectorAll('img');
$body = document.querySelector('body');
for (var i = 0; i < $image.length; i++) {

    $image[i].addEventListener('click', addBorder);

}

function addBorder(event) {
    if (event.target.width !=300) {
    event.target.style.border = '5px solid red';
} else {
    event.target.style.border = '5px solid red';
    event.stopPropagation();
}
}

document.addEventListener('click', addPrint);
function addPrint(event) {
    console.log(event.target.alt);
}



