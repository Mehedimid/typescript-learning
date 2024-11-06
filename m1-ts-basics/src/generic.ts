{
  // Define a generic type `User<T>` to represent a user object.
  // This type accepts a generic parameter `T` for the `details` property,
  // allowing different structures for additional details about each user.

  type User<T>= {
    id: number; 
    name: string; 
    age: number; 
    details: T;
  };

  // Define a generic type alias `UserArray<T>` for an array of `User<T>` objects.
  
  type UserGenericArray<T> = Array<User<T>>;

  // Define an interface `details1` to represent a specific structure for `details`,

  interface Details1 {
    father: string;
    mother: string;
  }

  // Create a `users1` array, which is an array of `User<Details1>` objects.
  
  const users1: UserGenericArray<Details1> = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      details: {
        father: "joj",
        mother: "jorjia",
      },
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      details: {
        father: "joj",
        mother: "jorjia",
      },
    },
  ];


  //   By using directly with type alius without declare array or generic array: use in "users2"
type UserWithAlus<T> = {
    id: number; 
    name: string; 
    age: number; 
    details: T;
  }

  // Define another interface `details2` for a different structure of `details`,
  interface Details2 {
    father: string;
    isAdult: boolean;
  }

  const users2: UserWithAlus<Details2>[] = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      details: {
        father: "joj",
        isAdult: true,
      },
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      details: {
        father: "joj",
        isAdult: true,
      },
    },
  ];
  
  type players = string[]
  const players : players = ["messi", "neymar", "suarez"]
}
