var activeElement = document.querySelector(".active");
// activeElement.className = "";

document.querySelector('li').className = 'active';



var newActiveElement = activeElement.parentElement.parentElement.previousElementSibling.className = 'active';