{
  //starts ===

  const men: string = "mehedi hasan asif";

  const isTrue: boolean = true;

  const myArray: number[] = [4, 5, 6];

  const myTuple: [number, string] = [4, "mehedi"];

  const myObject: {
    firstName: "mehedi hasan asif";
    secndName?: string;
    thirdName: string;
  } = {
    firstName: "mehedi hasan asif",
    secndName: "mehedi hasan asif too",
    thirdName: "mehedi asif",
  };


  type player1 = "LW";
  type player2 = "Messi";
  type player = player1 | player2;

  const bestPlayer: player = "LW";

  const kgToGram = (value: string | number) :  string | number | undefined=> {
    if (typeof value === "string") {
      const convertedValue = (parseFloat(value)*1000);
      return `if it string : ${convertedValue}`;
    // return convertedValue
    }
    if (typeof value === "number") {
        return (value*1000)
    }
  };

  const result1 = kgToGram("5") ;
  const result2 = kgToGram(10) as number ;
  console.log(result1 , result2);

  const users : Array<{id:number, name:string , age : number}> = [
    {
      id: 1,
      name: "Alice",
      age: 25
    },
    {
      id: 2,
      name: "Bob",
      age: 30
    },
    {
      id: 3,
      name: "Charlie",
      age: 28
    }
  ];
  
  

  //endss ===
}
