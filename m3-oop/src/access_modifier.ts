{
    // ======================= starts =====================

    class Teacher {
        name: string;
        age: number;
        private designation: string;
      
        constructor(name: string, age: number, designation: string) {
          this.name = name;
          this.age = age;
          this.designation = designation;
        }
     
        getTeacherRank = () => { 
            return this.designation
         }
      }

      const teacher1 = new Teacher("Shahina", 42, "senior teacher"); 
      console.log(teacher1.getTeacherRank());
 
    
// ======================= ends =====================
}