
# TypeScript Object-Oriented Programming (OOP) Guide

This guide explores key Object-Oriented Programming concepts in TypeScript, covering foundational principles and advanced techniques. Each section provides explanations and examples to help you build a strong understanding of OOP in TypeScript.

---

## Table of Contents

1. [Introduction to Object-Oriented Programming](#introduction-to-object-oriented-programming)
2. [Classes and Objects](#classes-and-objects)
3. [Inheritance](#inheritance)
4. [Type Guards: `typeof` & `in`](#type-guards-typeof--in)
5. [Type Guard Using `instanceof`](#type-guard-using-instanceof)
6. [Access Modifiers](#access-modifiers)
7. [Getters and Setters](#getters-and-setters)
8. [Static Properties and Methods](#static-properties-and-methods)
9. [Polymorphism](#polymorphism)
10. [Abstraction](#abstraction)
11. [Encapsulation](#encapsulation)

---

### 1. Introduction to Object-Oriented Programming

Object-Oriented Programming (OOP) is a programming paradigm that structures code using objects, making it ideal for managing complexity in large applications. Key OOP principles—encapsulation, inheritance, polymorphism, and abstraction—help create modular and maintainable codebases.

---

### 2. Classes and Objects

Classes act as blueprints for creating objects. Objects are instances of classes that encapsulate both state (properties) and behavior (methods).

```typescript
class Car {
   brand: string;
   year: number;

   constructor(brand: string, year: number) {
      this.brand = brand;
      this.year = year;
   }

   drive() {
      console.log(`Driving a ${this.brand} from ${this.year}`);
   }
}

const myCar = new Car("Toyota", 2021);
myCar.drive();
```

---

### 3. Inheritance

Inheritance enables a class to inherit properties and methods from another class, creating a parent-child relationship and promoting code reuse.

```typescript
class Vehicle {
   move() {
      console.log("Moving");
   }
}

class Car extends Vehicle {
   drive() {
      console.log("Driving");
   }
}

const myCar = new Car();
myCar.move();
myCar.drive();
```

---

### 4. Type Guards: `typeof` & `in`

Type guards help ensure that you’re dealing with expected types. Use `typeof` to check primitive types and `in` to check properties in objects.

```typescript
function logId(id: string | number) {
   if (typeof id === "string") {
      console.log(`ID as string: ${id}`);
   } else {
      console.log(`ID as number: ${id}`);
   }
}

const user = { name: "Alice", age: 25 };

function hasAge(obj: any): boolean {
   return "age" in obj;
}

console.log(hasAge(user));
```

---

### 5. Type Guard Using `instanceof`

The `instanceof` operator checks whether an object is an instance of a particular class, making it useful in inheritance hierarchies.

```typescript
class Animal {}
class Dog extends Animal {}

const myPet = new Dog();
console.log(myPet instanceof Dog); // true
console.log(myPet instanceof Animal); // true
```

---

### 6. Access Modifiers

Access modifiers control the visibility of class properties and methods. In TypeScript, `public`, `private`, and `protected` are commonly used.

```typescript
class Person {
   public name: string;
   private age: number;
   protected salary: number;

   constructor(name: string, age: number, salary: number) {
      this.name = name;
      this.age = age;
      this.salary = salary;
   }
}
```

---

### 7. Getters and Setters

Getters and setters provide controlled access to class properties.

```typescript
class Rectangle {
   private _width: number;
   private _height: number;

   constructor(width: number, height: number) {
      this._width = width;
      this._height = height;
   }

   get area(): number {
      return this._width * this._height;
   }

   set width(value: number) {
      if (value > 0) this._width = value;
   }
}
```

---

### 8. Static Properties and Methods

Static members belong to the class itself rather than to any object instance. They are accessed directly through the class.

```typescript
class MathUtil {
   static PI = 3.14;

   static calculateCircumference(radius: number): number {
      return 2 * MathUtil.PI * radius;
   }
}

console.log(MathUtil.calculateCircumference(10));
```

---

### 9. Polymorphism

Polymorphism allows different classes to be treated as instances of a parent class or interface, providing flexibility in code design.

```typescript
interface Animal {
   sound(): void;
}

class Dog implements Animal {
   sound() {
      console.log("Woof!");
   }
}

class Cat implements Animal {
   sound() {
      console.log("Meow!");
   }
}

function makeSound(animal: Animal) {
   animal.sound();
}

makeSound(new Dog());
makeSound(new Cat());
```

---

### 10. Abstraction

Abstraction hides implementation details behind a simplified interface. Use abstract classes and interfaces to define high-level blueprints.

```typescript
abstract class Shape {
   abstract getArea(): number;
}

class Circle extends Shape {
   constructor(public radius: number) {
      super();
   }

   getArea(): number {
      return Math.PI * this.radius ** 2;
   }
}
```

---

### 11. Encapsulation

Encapsulation restricts access to certain parts of a class, safeguarding the internal state of an object. Use private properties and methods to enforce encapsulation.

```typescript
class BankAccount {
   private balance: number;

   constructor(balance: number) {
      this.balance = balance;
   }

   deposit(amount: number) {
      if (amount > 0) this.balance += amount;
   }

   getBalance() {
      return this.balance;
   }
}
```

---

This guide provides a comprehensive introduction to Object-Oriented Programming in TypeScript. Practice these concepts with projects to gain proficiency in TypeScript's OOP capabilities.
