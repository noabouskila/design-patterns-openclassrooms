const fetchData = () => fetch('/data/data.json')
    .then(res => res.json())
    .catch(e => console.log('error', e))


class Movie {
    constructor(data) {
        this._id = data.id
        this._title = data.title
        this._img = data.img
        this._rating = data.rating
    }
 
    get id() {
        return this._id
    }
 
    get title() {
        return this._title
    }
 
    get img() {
        return this._img
    }
 
    get rating() {
        return this._rating
    }
}


class App {
    async init() {
        const data = await fetchData()
    }
}

const app = new App()
app.init()
