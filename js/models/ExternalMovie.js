class ExternalMovie{
  
    constructor(data) {
        this._synopsis = data.synopsis
        this._title_fr = data.title_fr
        this._title_en = data.title_en
        this._medias = data.medias
        this._infos = data.infos
    }

    get synopsis() {
        return this._synopsis
    }

    get title() {
        return this._title_fr ? this._title_fr : this._title_en
        // console.log(this._title_fr)
    }

    get duration() {
        return this._infos.duration

    }

    get released_in() {
        return this._infos.released_in
    }

    get picture() {
        return `/assets/${this._medias["picture"]}`
    }

    get thumbnail() {
        return `/assets/thumbnails/${this._medias["picture"]}`
    }
}



