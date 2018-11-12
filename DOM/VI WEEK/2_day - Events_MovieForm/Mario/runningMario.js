
$body = document.querySelector('body');
$mario = document.querySelector('.mario')
$runningMario = document.querySelector('.runningMario')

$body.addEventListener('keydown', runningMario);
$body.addEventListener('keyup', stopRunningMario);

var x = 0;
function runningMario(event) {

    if (event.keyCode === 39) {
        x += 100;
        $mario.style.display = 'none';
        $runningMario.style.display = 'inline-block';
        $body.style.backgroundPosition = x+'px';

    }
}
function stopRunningMario(event) {

    if (event.keyCode === 39) {
        $mario.style.display = 'inline-block';
        $runningMario.style.display = 'none';
    }
}

