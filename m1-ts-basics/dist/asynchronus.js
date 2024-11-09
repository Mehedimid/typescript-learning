"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return new Promise((resolve, reject) => {
        const data = "Fetching data...";
        if (data) {
            resolve(data);
        }
        else {
            reject("Failed to fetch data.");
        }
    });
}
function getUserData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchData(); // Waits for fetchData to resolve
            console.log("Data received:", data);
            return data;
        }
        catch (error) {
            console.error("Error:", error); // Catches errors from fetchData
        }
    });
}
