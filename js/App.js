class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.oldMoviesApi = new MovieApi('/data/old-movie-data.json')
        this.newMoviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const oldMoviesData = await this.oldMoviesApi.getMovies()
        const newMoviesData = await this.newMoviesApi.getMovies()
        const externalMoviesData = await this.externalMoviesApi.getMovies()
        
        const OldMovie = oldMoviesData.map(movie => new MoviesFactory(movie , "oldApi"))
        const NewMovie = newMoviesData.map(movie => new MoviesFactory(movie , "newApi"))
        const ExternalMovie = externalMoviesData.map(movie => new MoviesFactory(movie , "externApi"))

        // concatenation des 2 films (old et new)
        const fullMovies = OldMovie.concat(NewMovie).concat(ExternalMovie)

        fullMovies
        .forEach(movie => {
            const Template = new MovieCard(movie)
            this.$moviesWrapper.appendChild(
                Template.createMovieCard()
            )
        })
    }
}

const app = new App()
app.main()
