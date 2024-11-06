{
    const makeArray = (value: string) : string[]=> {
        return [value]
    }

    const makeGenericArray = <T> (value : T) : T[] => {
        return [value]
    }

    interface  bike  {
        brand : string, 
        price : number
      }

      const bike = {
        brand : "yamaha" , 
        price : 200000 
      }
   
    const resultMakeArray = makeArray('make array output as static string')
    const resultMakeGenericArray = makeGenericArray<number>(787878)
    const resultGenericObj = makeGenericArray<bike>(bike)
  
    const makeArrayWithTuple = <T> (student : T) : T  => {
        return {
            ...student,
            class : 9 
        }
    }

    const student = {
        id : 1, 
        name : "faiz"
    }

    interface student {
        id : number,
        name : string
    }

    const resultMakeArrayWithTuple = makeArrayWithTuple({
        id : 1, 
        name : "faiz"
    })

}