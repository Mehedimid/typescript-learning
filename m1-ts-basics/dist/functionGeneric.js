"use strict";
{
    const makeArray = (value) => {
        return [value];
    };
    const makeGenericArray = (value) => {
        return [value];
    };
    const bike = {
        brand: "yamaha",
        price: 200000
    };
    const resultMakeArray = makeArray('make array output as static string');
    const resultMakeGenericArray = makeGenericArray(787878);
    const resultGenericObj = makeGenericArray(bike);
    const makeArrayWithTuple = (student) => {
        return Object.assign(Object.assign({}, student), { class: 9 });
    };
    const student = {
        id: 1,
        name: "faiz"
    };
    const resultMakeArrayWithTuple = makeArrayWithTuple({
        id: 1,
        name: "faiz"
    });
}
