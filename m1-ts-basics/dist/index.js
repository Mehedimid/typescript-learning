"use strict";
{
    //starts ===
    const men = "mehedi hasan asif";
    const isTrue = true;
    const myArray = [4, 5, 6];
    const myTuple = [4, "mehedi"];
    const myObject = {
        firstName: "mehedi hasan asif",
        secndName: "mehedi hasan asif too",
        thirdName: "mehedi asif",
    };
    const bestPlayer = "LW";
    const kgToGram = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `if it string : ${convertedValue}`;
            // return convertedValue
        }
        if (typeof value === "number") {
            return value * 1000;
        }
    };
    const result1 = kgToGram("5");
    const result2 = kgToGram(10);
    console.log(result1, result2);
    //endss ===
}
