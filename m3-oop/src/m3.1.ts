{
  // ======================= starts =====================

  // Note: You have to declare all of the parameters type of constructor above the constructor

  class Teacher {
  name: string;
  age: number;
  designation: string;

  constructor(name: string, age: number, designation: string) {
    this.name = name;
    this.age = age;
    this.designation = designation;
  }
}
const teacher1 = new Teacher("Shahina", 42, "senior teacher");

class Student {
  //   name: string;
  //   age: number;
  //   role: number;
  //  ===just use public, typescript give you the default type and object====
  constructor(public name: string, public age: number, public role: number) {
    // this.name = name;
    // this.age = age;
    // this.role = role;
  }
}
const student1 = new Student("jorina", 22, 100);

// ======================= ends =====================
}