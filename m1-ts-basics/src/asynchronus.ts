
function fetchData() : Promise<string>{
    return new Promise<string>((resolve, reject) => {
        const data = "Fetching data..."

            if (data) {
                resolve(data);
            } else {
                reject("Failed to fetch data.");
            }
    });
}

async function getUserData() : Promise<string | undefined> {
    try {
        const data : string = await fetchData(); // Waits for fetchData to resolve
        console.log("Data received:", data);
        return data ;
    } catch (error) {
        console.error("Error:", error); // Catches errors from fetchData
    }
}


