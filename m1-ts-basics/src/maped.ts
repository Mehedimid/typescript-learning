{
    // ======================= starts =====================

    type Tbook = {
        title : string,
        id : number,
        price : number
    }
    
    // ekhane "t" map kore kore prottekta key ke nibe, and prottek tar type hisebe string declare korbe
    type TbookOptional1 = {
        [t in "title" | "id" | "price"]? : string
    }

      // ekhaneo "t" map kore kore prottekta Tbook type er key ke nibe, and prottek tar type hisebe obj["key"] = value ta ke dekhabe, jeta ashole string or number or anytype jeta amra dichi
    type TbookOptional = {
        [t in keyof Tbook]? : Tbook[t]
    }

    const task1 : TbookOptional1=  {
        title : "string",
        id : "2",
        // price : 22
    }
// ======================= ends =====================
}