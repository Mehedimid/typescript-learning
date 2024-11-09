
# TypeScript Learning Guide

This guide covers core TypeScript concepts including object structures, functions, type aliases, generics, and advanced types. Each section provides examples and explanations to help you understand TypeScript’s capabilities.

---

## Table of Contents
1. [Object Power, Optional, and Literal Types](#object-power-optional-and-literal-types)
2. [Functions in TypeScript](#functions-in-typescript)
3. [Destructuring in TypeScript](#destructuring-in-typescript)
4. [Type Aliases](#type-aliases)
5. [Union and Intersection Types](#union-and-intersection-types)
6. [Operators: Ternary, Optional Chaining, and Nullish Coalescing](#operators-ternary-optional-chaining-and-nullish-coalescing)
7. [Type Assertion and Narrowing](#type-assertion-and-narrowing)
8. [Interface vs Type](#interface-vs-type)
9. [Generics](#generics)
10. [Generics with Interfaces](#generics-with-interfaces)
11. [Function with Generics](#function-with-generics)
12. [Constraints](#constraints)
13. [Constraint Using `keyof`](#constraint-using-keyof)
14. [Asynchronous TypeScript](#asynchronous-typescript)
15. [Conditional Types](#conditional-types)
16. [Mapped Types](#mapped-types)
17. [Utility Types](#utility-types)

---

## 1. Object Power, Optional, and Literal Types

### Object Power
Define object structures with exact properties for reliability.

```typescript
type User = {
   name: string;
   age: number;
   isAdmin: boolean;
};

const user1: User = { name: "Alice", age: 25, isAdmin: false };
```

### Optional Properties
Define properties that may or may not exist using `?`.

```typescript
type UserWithOptional = {
   name: string;
   age?: number;
};

const user2: UserWithOptional = { name: "Bob" };
```

### Literal Types
Use literal types to specify exact values for properties.

```typescript
type Status = "active" | "inactive" | "suspended";
const accountStatus: Status = "active";
```

---

## 2. Functions in TypeScript

Specify parameter and return types for functions.

```typescript
function add(a: number, b: number): number {
   return a + b;
}

function greet(name: string, greeting?: string): string {
   return `${greeting || "Hello"}, ${name}!`;
}
```

---

## 3. Destructuring in TypeScript

Use destructuring to simplify access to object properties or array elements.

```typescript
const user = { name: "Alice", age: 30 };
const { name, age } = user;
```

---

## 4. Type Aliases

Type aliases create custom names for types to simplify code.

```typescript
type Point = { x: number; y: number };
const center: Point = { x: 0, y: 0 };
```

---

## 5. Union and Intersection Types

Define variables that accept multiple types (union) or a combination of types (intersection).

```typescript
let score: number | string = 100;

type Admin = { admin: true };
type User = { name: string };
type AdminUser = Admin & User;
```

---

## 6. Operators: Ternary, Optional Chaining, and Nullish Coalescing

- **Ternary**: `condition ? expr1 : expr2`
- **Optional Chaining**: Access nested properties safely.
- **Nullish Coalescing**: Provide default only if `null` or `undefined`.

```typescript
const user = { name: "Alice", address: { city: "Wonderland" } };
const displayName = user.name ?? "Guest";
```

---

## 7. Type Assertion and Narrowing

Refine types in complex situations with type assertions and control flow.

```typescript
let someValue: unknown = "Hello World";
let strLength: number = (someValue as string).length;
```

---

## 8. Interface vs Type

Interfaces define object shapes and can extend other interfaces. Types are versatile and support unions, intersections, and more.

```typescript
interface Person {
   name: string;
   age: number;
}

type Employee = {
   position: string;
};

interface Developer extends Person {
   language: string;
}

type DevEmployee = Person & Employee;
```

---

## 9. Generics

Generics enable components to work with any type.

```typescript
function identity<T>(value: T): T {
   return value;
}
```

---

## 10. Generics with Interfaces

Combine generics and interfaces to define flexible data structures.

```typescript
interface Box<T> {
   content: T;
}
```

---

## 11. Function with Generics

Generics in functions allow handling different types while maintaining type safety.

```typescript
function merge<T, U>(obj1: T, obj2: U): T & U {
   return { ...obj1, ...obj2 };
}
```

---

## 12. Constraints

Constraints limit generics to specific types.

```typescript
function getLength<T extends { length: number }>(item: T): number {
   return item.length;
}
```

---

## 13. Constraint Using `keyof`

Use `keyof` for constraints based on object properties.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
   return obj[key];
}
```

---

## 14. Asynchronous TypeScript

TypeScript supports async programming with Promises and async/await.

```typescript
async function fetchData(url: string): Promise<string> {
   const response = await fetch(url);
   return await response.text();
}
```

---

## 15. Conditional Types

Conditional types create types that depend on conditions.

```typescript
type IsString<T> = T extends string ? "Yes" : "No";
```

---

## 16. Mapped Types

Mapped types allow you to transform properties in a type.

```typescript
type ReadOnly<T> = { readonly [K in keyof T]: T[K] };
```

---

## 17. Utility Types

TypeScript provides utility types for transformations.

```typescript
type PartialProfile = Partial<UserProfile>;
type ReadonlyProfile = Readonly<UserProfile>;
type PickedProfile = Pick<UserProfile, "name" | "email">;
```

---

This guide provides a strong foundation in TypeScript. Practice these concepts with real projects to master TypeScript!
