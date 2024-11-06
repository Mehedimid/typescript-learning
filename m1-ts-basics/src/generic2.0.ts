//  It is  for using 2 dynamic params
  
type User<T1, T2 = null>= {
    id: number; 
    name: string; 
    age: number; 
    details: T1;
    bike?:T2
  };

  type UserGenericArray<T1, T2> = Array<User<T1, T2>>;

  interface Details1 {
    father: string;
    mother: string;
  }

  interface bike {
    brand : string , 
    price? : number 
  }

  // Create a `users1` array, which is an array of `User<Details1>` objects.
  
  const users1: User<Details1, bike>[] = [
    {
      id: 1,
      name: "Alice",
      age: 25,
      details: {
        father: "joj",
        mother: "jorjia",
      },
      bike : {
        brand : "yamaha" , 
        price : 200000 
      }
    },
    {
      id: 2,
      name: "Bob",
      age: 30,
      details: {
        father: "joj",
        mother: "jorjia",
      },
      bike : {
        brand : "yamaha" , 
   
      }
    },
  ];