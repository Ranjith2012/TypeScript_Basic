function fetchData(): Promise<string> {
    return new Promise((resolve, reject) => {
        const success = true; 
        setTimeout(() => {
            if (success) {
                resolve("Data fetched successfully!");
            } else {
                reject("Failed to fetch data."); 
            }
        }, 1000);
    });
}

// Using the Promise
fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
