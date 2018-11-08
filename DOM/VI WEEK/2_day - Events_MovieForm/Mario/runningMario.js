
$body = document.querySelector('body');
$mario = document.querySelector('.mario')
$runningMario = document.querySelector('.runningMario')

$body.addEventListener('keydown', runningMario);

function runningMario(event) {

    if (event.keyCode === 39) {
        $mario.style.display = 'none';
        $runningMario.style.display = 'inline-block';

    } else {
        $mario.style.display = 'inline-block';
        $runningMario.style.display = 'none';

    }

}