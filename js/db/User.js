class User {
    constructor(data){

        if(User.exists){ // si le user a deja ete instancié alors :
            return User.instance // tu retourne l'instance deja instancié
        }else if(data && data.firstName && data.lastName){
            this._firstName = data.firstName
            this._lastName = data.lastName

            // sauvegarder en localStorage
            this.saveToLocalStorage()

            // j'instancie laépropriete exist de user à true : pour detecter si il existe ou non 
            User.exists = true 
            // j'instancie la proporieté instance à this : pour faire réference à l'objet entier
            User.instance = this

            // retourner notre objet :
            return this
        }

    }

    get firstName(){
        return this._firstName
    }
    get lastName(){
        return this._lastName
    }
    get user(){
        // la constante firstname stocke soit this._firstname ou alors si il y'a une
        // propriete firstName en localStorage
       const firstName = this._firstName || localStorage.getItem('firstName')
       const lastName = this._lastName || localStorage.getItem('lastName')

       if(firstName && lastName){ //sils existent ,on instancie l'objet user
            const user = new User(
                firstName,
                lastName
            )
       }
       if(!firstName && !lastName){ // si ils ne sont pas definis
            return null
       }

        //sinon on retourne 
        return{
            firstName : firstName,
            lastName : lastName
        }
    }

    // stocker les données en localStorage
    saveToLocalStorage(){
        localStorage.setItem('firstName' , this._firstName)
        localStorage.setItem('lastName' , this._lastName)
    }
}

// const firstUser = new User("noa", "bouskila")
// console.log(firstUser)