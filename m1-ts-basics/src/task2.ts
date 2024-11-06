{

    type UserInfo = {
        name: string,
        age: number,
        role?: "admin" | "user" | "guest" // Optional literal type
    }

    const logUserInfo = (value:UserInfo)=> {
        const {name, age, role} = value

        console.log(`Name: ${name}, Age: ${age}, Role: ${role || "guest"}`);
    };
    
 // Usage examples
logUserInfo({ name: "Alice", age: 30, role: "admin" });
logUserInfo({ name: "Bob", age: 25 }); // role defaults to "guest"
logUserInfo({ name: "Charlie", age: 40, role: "user" });
}