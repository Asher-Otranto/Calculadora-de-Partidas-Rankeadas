class hero{
    constructor(name,age,type){
        this.name = name,
        this.age = age,
        this.type = type 
    }

    attack(){

        let attacking = "-"

         if(this.type === "mago" ){
            attacking = "magia"
         }
         else if(this.type === "guerreiro" ){
          attacking = "espada"
         }
         else if(this.type === "monge"){
            attacking = "artes marciais"
         }
         else if ( this.type === "ninja"){
            attacking = "shuriken"
         }

         console.log(`O ${this.type} atacou usando ${attacking}`)
  
        
    }
}



let character1 = new hero("Osvaldo",80,"mago")

let character2 = new hero("Maria das Graças",25,"ninja")

character1.attack()
character2.attack()