
class MoviesFactory{
    constructor(data,type){
        // type => source des données
        if (type === "oldApi"){
            return new OldMovie(data)
        }
        else if(type === "newApi"){
            return new Movie(data)
        }
        else if(type === "externApi"){
            return new ExternalMovie(data)
        }
        else{
            throw 'Unknown format type'
        }
    }
}
