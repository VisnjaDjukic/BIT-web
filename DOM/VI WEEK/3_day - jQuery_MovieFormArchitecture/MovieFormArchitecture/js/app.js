var dataModule = (function () {
    // ne razumem?!
    var data = {
        movies: []
    };

    // Movie constructor
    function Movie(title, genre, length) {
        this.title = title;
        this.genre = genre;
        this.length = length;
    }

    Movie.prototype.getData = function () {
        return this.title + ", " + this.length + "min, " + this.genre;
    };

    //validate Input

    //create Movie
    function createMovie(title, genre, length) {
        return new Movie(title, genre, length);
    }

    //add Movie To List
    function addMovie(movie) {
        data.movies.push(movie);
    }

    //movie length

    return {
        createMovie: createMovie,
        addMovie: addMovie
    }

})();



var uiModule = (function () {

    var $titleElement = document.querySelector('.movie-title');
    var $lengthElement = document.querySelector('.movie-length');
    var $genreSelectElement = document.querySelector('.movie-genre');
    var $moviesList = document.querySelector('.movie-list');

    // collect Form Input
    function collectFormInput() {
        var movieTitle = $titleElement.value.trim();
        var movieLength = $lengthElement.value.trim();
        var movieGenre = $genreSelectElement.value.trim();
        return {
            title: movieTitle,
            length: movieLength,
            genre: movieGenre
        };
    }
    // display Error
    // display Movie
    function displayMovie(movie) {
        $moviesList.innerHTML += movie.getData() + '<br>';
    }
    // reset Form
    return {
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    };

})();



var controller = (function (ui, data) {

    //setup Event Handler
    var $addMovie = document.querySelector(".movie-add");
    $addMovie.addEventListener("click", function (event) {

        //collect form data
        var movieObj = ui.collectFormInput();

        //validate input

        //create movie instance
        var movie = data.createMovie(movieObj.title, movieObj.length, movieObj.genre);

        //add movie to list
        data.addMovie(movie);

        //display movie
        ui.displayMovie(movie);
        //reset form

    });

})(uiModule, dataModule);