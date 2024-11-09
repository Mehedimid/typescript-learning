"use strict";
{
    const book = {
        title: "Amazoni",
        author: "James Rolins",
        publishedYear: 2022
    };
    const isRecentBook = (myBook) => {
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const bookPublishYear = myBook.publishedYear;
        // if(currentYear - bookPublishYear > 5){
        //     return false
        // }
        // return true
        return currentYear - bookPublishYear <= 5;
    };
    const result = isRecentBook(book);
    console.log(result);
    // ======================= ends =====================
}
