{
  // ======================= starts =====================

  class Parent {
    name: string ;
    age : number;

    constructor(name:string, age:number) {
        this.name = name ;
        this.age = age ;
    }

    takeMeal(food:string){
        console.log(`${this.name} will take ${food}`);
    }
  }




  class Teacher extends Parent {

    designation: string;
    //  ===just use public, typescript give you the default type and object====
    constructor(name: string, age: number, designation: string) {
        super(name, age)
      this.designation = designation;
    }

    takeClass() {
      console.log(
        `Mr ${this.name} , who's age is ${this.age} got the new desgination of ${this.designation}`
      );
    }
  }
  const teacher1 = new Teacher("Shahina", 42, "senior teacher");
  teacher1.takeClass();




  class Student extends Parent{
 
    role: number;
    //  ===just use public, typescript give you the default type and object====
    constructor( name: string, age: number, role: number) {
      super(name, age)
      this.role = role;
    }
  }
  const student1 = new Student("jorina", 22, 100);

  student1.takeMeal("meat and rice")
  teacher1.takeMeal("soup and drink")
  teacher1.takeClass()

  // ======================= ends =====================
}
