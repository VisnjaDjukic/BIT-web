(function () {

    function dateString(dateObject) {
        const dd = dateObject.getDate();
        const mm = dateObject.getMonth() + 1;
        const yyyy = dateObject.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }

        if (mm < 10) {
            mm = '0' + mm;
        }
        return `${dd}.${mm}.${yyyy}`;

    };



    //// Genre ////
    function Genre(name) {

        this.name = name;
    };

    Genre.prototype.getData = function () {
        return this.name[0].concat(this.name[this.name.length - 1]).toUpperCase();  //action -> AC
    };



    //// Movie ////
    function Movie(title, genreObj, length) {

        this.title = title;
        this.genre = genreObj;

        //////////////////// ?
        //     try {
        //         if (typeof length != 'number') {
        //             var error = new TypeError('We expect movie length to be a number!');
        //             throw error;
        //         }

        //         this.length = length;


        //     } catch (err) {
        //         return console.log('Type Error: ', err.message);;
        //     }

    };

    Movie.prototype.getData = function () {
        return this.title.concat(', ', this.length, 'min, ', this.genre.getData());
    };

    const drama = new Genre('drama');
    const action = new Genre('action');
    const movie = new Movie('batman', drama, '120');
    console.log(movie.getData());

    //// Program ////
    function Program(date) {

        this.date = date;
        this.listOfMovies = [];
        this.numOfMovies = 0;
        this.programLength = 0;
    };

    Program.prototype.addMovie = function (movie) {
        const movies = this.listOfMovies;
        const movieGenre = movie.genre.getData();
        const numOfMoviesWithSameGenre = 0;
        const lengthOfProgram = this.programLength;

        // movies.forEach(function (movieInList) {
        //     if (movieInList.genre.getData() == movieGenre) {
        //         numOfMoviesSameGenre++;
        //     }
        // });

        for (let i = 0; i < movies.length; i++) {
            const currentMovie = movies[i];
            if (currentMovie.genre.getData() == movieGenre) {
                numOfMoviesWithSameGenre++;
            }
        }

        if ((lengthOfProgram <= (480 - movie.length)) && numOfMoviesWithSameGenre < 4) {
            movies.push(movie);
            this.numOfMovies++;
            lengthOfProgram += movie.length;
        } else {
            console.log(`Cannot add ${movie.title} movie.`);
        }


    };



    const movie1 = new Movie('bubi', drama, 100);
    const movie2 = new Movie('bubi2', drama, 100);
    const movie3 = new Movie('bubi3', drama, 100);
    const movie4 = new Movie('bubi4', drama, 100);
    const movie5 = new Movie('bubi5', action, 90);

    const competition = new Program(new Date('2-12-2019'));

    competition.addMovie(movie1);
    competition.addMovie(movie2);
    competition.addMovie(movie3);
    competition.addMovie(movie4);
    competition.addMovie(movie5);


    Program.prototype.getData = function () {
        let outputStr = `${dateString(this.date)}, program duration: ${this.programLength}min\n`;

        for (let i = 0; i < this.listOfMovies.length; i++) {
            const currentMovie = this.listOfMovies[i];
            outputStr += `\t\t\t${currentMovie.getData()}\n`;
        }

        return outputStr;

    };

    console.log(competition.getData());



    //// Festival ////
    function Festival(name) {

        this.name = name;
        this.listOfPrograms = [];
        this.numOfAllMovies = 0;

    };


    Festival.prototype.addProgram = function (program) {
        this.listOfPrograms.push(program);
        this.numOfAllMovies += program.numOfMovies;
    };

    Festival.prototype.getData = function () {
        let outputStr = `${this.name} has ${this.numOfAllMovies} movie titles\n`;

        for (let i = 0; i < this.listOfPrograms.length; i++) {
            const currentProgram = this.listOfPrograms[i];
            outputStr += `\t\t${currentProgram.getData()}\n`;
        }

        console.log(outputStr);
        return outputStr;
    };



    //// Create Functions ////
    function createMovie(movieTitle, movieLength, genreName) {
        const genreObj = new Genre(genreName);
        const movie = new Movie(movieTitle, genreObj, movieLength);

        return movie;
    }

    function createProgram(dateStr) {
        const date = new Date(dateStr);
        const program = new Program(date);
        return program;
    }



    //// Create festival ////

    const fest = new Festival('Fest');

    const competition = createProgram('2-12-2019');
    const oldies = createProgram('2-15-2019');

    const batman = createMovie('Batman', 130, 'Action');
    const firstReformed = createMovie('First Reformed', 108, 'Drama');
    const suspiria = createMovie('Suspiria', 97, 'Horror');
    const theTenant = createMovie('The Tenant', 126, 'Horror');

    competition.addMovie(batman);
    competition.addMovie(firstReformed);
    oldies.addMovie(suspiria);
    oldies.addMovie(theTenant);

    fest.addProgram(competition);
    fest.addProgram(oldies);

    console.log(fest.getData());

})();
