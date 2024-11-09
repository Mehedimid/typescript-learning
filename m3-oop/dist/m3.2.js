"use strict";
{
    // ======================= starts =====================
    class Parent {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    class Teacher {
        constructor(name, age, designation) {
            this.name = name;
            this.age = age;
            this.designation = designation;
        }
        takeClass() {
            console.log(`Mr ${this.name} , who's age is ${this.age} got the new desgination of ${this.designation}`);
        }
    }
    const teacher1 = new Teacher("Shahina", 42, "senior teacher");
    class Student {
        constructor(name, age, role) {
            this.name = name;
            this.age = age;
            this.role = role;
        }
    }
    const student1 = new Student("jorina", 22, 100);
    // ======================= ends =====================
}
