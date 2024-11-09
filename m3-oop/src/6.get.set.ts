{
    // ======================= starts =====================

    class Teacher {
        name: string;
        age: number;
        _designation: string;
        balance : number
      
        constructor(name: string, age: number, designation: string, balance : number) {
          this.name = name;
          this.age = age;
          this._designation = designation;
          this.balance = balance
        }
        
        public get teacher() : string {
            return this._designation
        }
        
        public set newBalance(v : number) {
            this.balance = this.balance + v;
        }
      }
      const teacher1 = new Teacher("Shahina", 42, "senior teacher mod 6", 32); 

    //   here we don't have put the new balance value as like "teacher.newBalance(18)". we can use as an object property
      teacher1.newBalance = 18 ;
      console.log(teacher1.balance); //by using get we can use this get type of function as an object;
 
    
// ======================= ends =====================
}