var dataModule = (function () {
    var storage = {
        movies: []
    }

    function Movie(title, length, genre) {
        this.title = title;
        this.length = length;
        this.genre = genre;
    }

    Movie.prototype.getInfo = function () {
        return this.title + ", " + this.length + ", " + this.genre;
    }

    function createMovie(title, length, genre) {
        return new Movie(title, length, genre);
    }

    function addMovie(movie) {
        storage.movies.push(movie);
    }

    return {
        createMovie: createMovie,
        addMovie: addMovie
    }
})();

var uiModule = (function () {
    var $movieTitle = document.querySelector("#title");
    var $movieLength = document.querySelector("#length");
    var $movieGenre = document.querySelector("#genre");
    var $movieList = document.querySelector(".movie-list");

    // function getTitle() {
    //     return $movieTitle.value;
    // }
    // function getLength() {
    //     return $movieLength.value;
    // }

    function collectFormInput() {
        var title = $movieTitle.value;
        var length = $movieLength.value;
        var genre = $movieGenre.value;
        return {
            title: title,
            length: length,
            genre: genre,
        }
    }

    function displayMovie(movie) {
        $movieList.innerHTML += movie.getInfo() + '<br>';
    }

    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    }

})();

var controller = (function (data, ui) {

    function init() {
        console.log('App initializing');
        setupEventListener();
    }

    function setupEventListener() {
        var $addMovie = document.querySelector("#button");
        $addMovie.addEventListener("click", onAddMovieHandler);
    }

    function onAddMovieHandler() {

        // collect form data
        var movieObj = uiModule.collectFormInput();

        // validate input

        // create Movie instance
        var newMovieInstance = dataModule.createMovie(movieObj.title, movieObj.length, movieObj.genre);

        // add movie to list
        dataModule.addMovie(newMovieInstance);

        // display movie
        uiModule.displayMovie(newMovieInstance);

        // reset form
    }
    return {
        init: init
    }

})(dataModule, uiModule);