"use strict";
{
    // ======================= starts =====================
    class Father {
        constructor() {
            this.name = "Ibrahim";
            this.age = 150;
            // No constructor defined here, so it uses the default constructor.
        }
    }
    class Son extends Father {
    }
    const father = new Father();
    const son = new Son();
    console.log(father, son); // Outputs: Ismail 40
    // ======================= ends =====================
}
