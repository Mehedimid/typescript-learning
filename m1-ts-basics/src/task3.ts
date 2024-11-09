{
    // ======================= starts =====================

    const filterEvenNumbers = (arr : number[]) : number[] => { 
        // let evenArr = []
        // for (let i = 0; i < arr.length; i++) {
        //     if(arr[i]%2===0){
        //         evenArr.push(arr[i])
        //     }
        // }
        // return evenArr 
        
        const filterArray = arr.filter(num => num%2 == 0)
        return filterArray
     }
     const result = filterEvenNumbers([12, 23, 32, 33, 5, 9, 2, 78])
    console.log(result);
// ======================= ends =====================
}