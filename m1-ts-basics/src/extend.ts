{
    //===================

    interface Person {
        name: string;
        age: number;
    }
    
    interface Employee extends Person {
        employeeId: number;
    }
    
    // Now, Employee has `name`, `age`, and `employeeId`.
    const employee: Employee = {
        name: "Alice",
        age: 30,
        employeeId: 1234
    };

    //===================
}