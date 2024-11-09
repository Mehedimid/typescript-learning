{
  // ======================= starts =====================
  // Use : an object or parameter can be "instanceof" child or something else class , that mean, that object is equal to that child or something else. 

  class Animal {
    name : string ;
    spacies:string
    constructor(name:string, spacies:string) {
        this.name = name;
        this.spacies = spacies
    }
    makeSound = (sound : string) => {console.log(`the ${this.name} sounds like ${sound}`);}
  }

  class Dog extends Animal {
    constructor(name:string, spacies:string) {
        super(name, spacies)
    }
    makeDogSound = () => {
        console.log(`${this.name} is barking ghew ghew`);
    }
  }

  class Cat extends Animal {
    constructor(name:string, spacies:string) {
        super(name, spacies)
    }
    makeCatSound = () => {
        console.log(`${this.name} is making mew mew`);
    }
  }

  const isDog = (animal:Animal) : animal is Dog => { 
    return animal instanceof Dog
   }

  const getAnimal = (animal:Animal) => { 
    if(isDog(animal)){
        animal.makeDogSound()
    }
   }

  const dog = new Dog("dog", "animal")
  const cat = new Cat("cat", "animal")
  getAnimal(dog)

  // ======================= ends =====================
}
