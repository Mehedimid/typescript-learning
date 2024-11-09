{
    // ======================= starts =====================

    interface Tstudent {
        name : string, 
        age : number,
        grades : number[]
    }
    // const student : Tstudent = {
    //     name : "Rodri",
    //     age : 29, 
    //     grades : [92, 54, 65, 77]
    // }

    const calculateAvgGrade = (student:Tstudent) : number => { 
 
        // let sum = 0
        // for(let i=0; i<student.grades.length; i++){
        //    sum = sum + student.grades[i]
        // }

        const sum = student.grades.reduce((preValue : number, currentValue : number)=> preValue+currentValue , 0)


        const avgGrade = sum/student.grades.length
        return avgGrade
     }
    const result = calculateAvgGrade({
        name : "Rodri",
        age : 29, 
        grades : [92, 54, 65, 77]
    })
    console.log(result);
// ======================= ends =====================
}