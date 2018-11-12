const $body = $('body');
const $newSoccer = $('.soccerPlayer');
let isActive = true;
const $btn = $('.stopBtn');

function movePlayer(event) {

    const x = event.clientX;
    const y = event.clientY;

    let newX = x - 100 + 'px';
    let newY = y - 100 + 'px';

    $newSoccer.css('left', newX);
    $newSoccer.css('top', newY);

}

$body.on('click', movePlayer);

$btn.on('click', stopMovePlayer);

function stopMovePlayer() {

    $btn.click(function (event) {
        event.stopPropagation();
    });

    if (!isActive) {

        $body.on('click', movePlayer);
        $btn.text("Stop Moving");
        isActive = true;

    } else {

        $body.off('click', movePlayer);
        $btn.text("Start Moving");
        isActive = false;
    }
}


