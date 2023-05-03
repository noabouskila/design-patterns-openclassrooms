// le proxy patterns (structural) qui va faire le lien entre l'objet de tri SorterForm et la librairie de tri index.js de sorter
// => pour pouvoir mettre en cache les données et imgs
class ProxyRatingSorter {
    constructor() {
        this.cache = []
       
    }

    async sorter(movies , orderBy) {

        // verifier s'il ya pas du cache deja 
        const cachedResult = this.cache.find(elt => elt.key === orderBy)

        if(cachedResult){
            console.log('get from cache')
            return cachedResult
        }

        const data = await RatingSorterApi.sorter(movies , orderBy)
        this.cache.push(data)

        return data
    }

}
