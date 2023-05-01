class FilterMoviesAdapter {
    constructor(Movies , actor){
        this.Movies = Movies
        this.actor = actor
    }

    async filterByActor(){
        // j'utilise la synthaxe de la version 1 en utilisant la methode de la version2 (ordre version 2 : actor puis Movies)
        return await FilterV2.filterByActor(this.actor, this.Movies)
    }
}
