class ApiAdapter {
   constructor(url) {
       this._url = url
   }
 
   async getMovies() {
       return await ApiV2.get(this._url)
   }
}
