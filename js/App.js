class App {
    constructor() {
        this.$moviesWrapper = document.querySelector('.movies-wrapper')
        this.$modalWrapper = document.querySelector('.modal')
        
        this.moviesApi = new MovieApi('/data/new-movie-data.json')
        this.externalMoviesApi = new MovieApi('/data/external-movie-data.json')
    }

    async main() {
        const moviesData = await this.moviesApi.get()
        const externalMoviesData = await this.externalMoviesApi.get()

        const Movies = moviesData.map(movie => new MoviesFactory(movie, 'newApi'))
        const ExternalMovies = externalMoviesData.map(movie => new MoviesFactory(movie, 'externalApi'))

        const FullMovies = Movies.concat(ExternalMovies)


        const Form = new FormModal()
        Form.render()

        const Filter = new FilterForm(FullMovies)
        Filter.render()

        FullMovies.forEach(movie => {
            // rajout du decorator
                const Template = movieCardWithPlayer(new MovieCard(movie))
                this.$moviesWrapper.appendChild(
                    Template.createMovieCard()
                )
        })
    }
}

const app = new App()
app.main()
