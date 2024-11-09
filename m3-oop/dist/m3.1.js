"use strict";
{
    // ======================= starts =====================
    class Teacher {
        constructor(name, age, designation) {
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
        constructor(name, age, role) {
            this.name = name;
            this.age = age;
            this.role = role;
            // this.name = name;
            // this.age = age;
            // this.role = role;
        }
    }
    const student1 = new Student("jorina", 22, 100);
    // ======================= ends =====================
}
