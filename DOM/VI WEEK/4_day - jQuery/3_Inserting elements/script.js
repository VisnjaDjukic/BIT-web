var $div = $("<div>").addClass("gallery");

$('body').append($div);


for (var i = 0; i < 10; i++) {
    var $img = $("<img>").attr('src', 'https://via.placeholder.com/200x200');
    $div.append($img);
}
var $title = $("<h3>").text("New Gallery");
$('body').prepend($title);

$('img').each(randomImageSize);

function randomImageSize(index, e) {

    var x = Math.floor(Math.random() * 90) + 10;
    $(e).css("width", x + '%');

}

$('img').each(setBorder);

function setBorder(index, e) {

    if ($(e).width() <= 200) {
        $(e).css('border', '5px solid green');
    }

}

