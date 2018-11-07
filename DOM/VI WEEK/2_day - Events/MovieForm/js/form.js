var movieList = [];
var totalMovieLength = 0;

var $movieButton = document.querySelector('.movie-add');
var $titleInput = document.querySelector('.movie-title');
var $lengthInput = document.querySelector('.movie-length');
var $genreSelect = document.querySelector('.movie-genre');
var $movieList = document.querySelector('.movie-list');
var $totalLength = document.querySelector('.total-length');
var $errorDiv = document.querySelector('.error');

function Movie(name, length, genre) {
    this.name = name;
    this.length = length;
    this.genre = genre;

}

Movie.prototype.printInfo = function () {
    return this.name + ', ' + this.length + ', ' + this.genre;
}

$movieButton.addEventListener('click', function (event) {

    console.log('cao');
    // if 



    var movieTitle = $titleInput.value;
    var movieLength = parseInt($lengthInput.value);
    var movieGenre = $genreSelect.value;

    if (!isNaN(movieLength) && movieTitle != '' && movieTitle != ' ') {

        $errorDiv.textContent = null;
        var movie = new Movie(movieTitle, movieLength, movieGenre);

        movieList.push(movie.printInfo());

        $movieList.innerHTML += movie.printInfo() + '<br>';

        totalMovieLength += movieLength;
        $totalLength.textContent = 'All movies length: ' + totalMovieLength;
        $titleInput.value = '';
        $lengthInput.value = '';
    }
    else {
        $errorDiv.textContent = 'Wrong input! Please check!';
    }
    // console.log(movie.printInfo());
})

