{
    // ======================= starts =====================
    
    // Define a Counter class with a static count property to track count across all instances
    class Counter {
        // Static property to keep track of the count, shared by all instances
        static count: number = 0;

        // Static method to increment the count by 1
        // Note: Using an arrow function here binds `this` to the class context
        static increament = () => {
           return Counter.count = Counter.count + 1;
        }

        // Instance method to decrement the count by 1
        // This method can only be called on an instance, but it still modifies the shared static count
        decreament = () => {
           return Counter.count = Counter.count - 1;
        }
    }

    // Create an instance of the Counter class (though it's not necessary for using static methods)
    const instance = new Counter();

    // Call the static increment method multiple times and log the updated count
    console.log(Counter.increament()); // Logs 1
    console.log(Counter.increament()); // Logs 2
    console.log(Counter.increament()); // Logs 3
    console.log(Counter.increament()); // Logs 4

    // Call the instance's decrement method and log the updated count
    console.log(instance.decreament()); // Logs 3

    // ======================= ends =====================
}