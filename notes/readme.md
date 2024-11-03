# TypeScript Learning Roadmap

A comprehensive guide to mastering TypeScript fundamentals and advanced concepts before starting an industrial project.

---

## Table of Contents

1. [Essentials](#essentials)
2. [Advanced TypeScript Concepts](#advanced-typescript-concepts)
3. [Modern Development](#modern-development)
4. [Frameworks and Libraries](#frameworks-and-libraries)
5. [Bonus Topics](#bonus-topics)

---

## Essentials

1. **Basic Types**
   - `string`, `number`, `boolean`, `null`, `undefined`, `any`, `unknown`
   - Arrays and Tuples
   - Union and Intersection Types

2. **Functions**
   - Parameter and Return Type Annotations
   - Optional and Default Parameters
   - Function Overloads

3. **Objects and Interfaces**
   - Typing Objects and Nested Objects
   - Interfaces for Type Safety
   - Readonly Properties and Optional Properties in Interfaces

4. **Type Aliases**
   - Using `type` to define custom types
   - Union and Intersection in Type Aliases

5. **Enums**
   - Numeric and String Enums
   - Using enums with types

---

## Advanced TypeScript Concepts

1. **Generics**
   - Generic Functions, Classes, and Interfaces
   - Constraints with Generics (e.g., `T extends`)
   - Default Values for Generics

2. **Type Assertions and Type Casting**
   - Using `as` keyword for type assertions
   - Angle bracket syntax (`<Type>value`)

3. **Keyof, typeof, and Index Types**
   - Using `keyof` for dynamic key references
   - `typeof` for getting the type of variables
   - Index types (`{ [key: string]: Type }`)

4. **Mapped Types**
   - Creating new types by transforming existing ones
   - Using `Partial`, `Required`, `Readonly`, `Pick`, and `Omit`

5. **Conditional Types**
   - Basic conditional types (e.g., `T extends U ? X : Y`)
   - Utility types like `Exclude`, `Extract`, `NonNullable`, etc.

---

## Modern Development

1. **Type Inference and Type Compatibility**
   - Understanding how TypeScript infers types and compatibility rules

2. **Modules and Namespaces**
   - Importing and Exporting modules
   - `export`, `export default`, and `import`

3. **Declaration Files (.d.ts)**
   - Understanding and creating `.d.ts` files for third-party libraries
   - Using DefinitelyTyped for external type declarations

4. **TypeScript Configuration**
   - `tsconfig.json` basics and commonly used options
   - Strict mode settings (`strictNullChecks`, `noImplicitAny`, etc.)
   - Path mapping and module resolution

5. **Type Guards**
   - `typeof`, `instanceof`, and custom type guards
   - Narrowing types with guards

6. **Error Handling and Best Practices**
   - Writing safe and maintainable TypeScript code

---

## Frameworks and Libraries

1. **TypeScript with React**
   - Typing props and state in React components
   - Typing React hooks (`useState`, `useRef`, etc.)
   - Higher-order components and context API with TypeScript

2. **TypeScript with Node.js**
   - Typing Express requests and responses
   - Working with async/await and Promises

3. **Testing with TypeScript**
   - Using TypeScript with Jest or other testing frameworks
   - Writing testable TypeScript code and testing types

4. **Advanced TypeScript Tools**
   - Linting and formatting with ESLint and Prettier
   - Debugging TypeScript code

---

## Bonus Topics

1. **Decorators (if needed)**
   - Using and creating decorators (experimental feature)
   - Class decorators, method decorators, and property decorators

2. **TypeScript with GraphQL (if applicable)**
   - Using TypeScript with GraphQL queries and mutations
   - Typing responses and schemas

3. **Working with TypeORM or Prisma**
   - Defining models and types for databases
   - Strongly typing database queries

---

By mastering these TypeScript concepts, you'll be well-prepared to handle TypeScript-based projects in real-world environments!
