function fetchData() {
    return new Promise(function (resolve, reject) {
        var success = true;
        setTimeout(function () {
            if (success) {
                resolve("Data fetched successfully!");
            }
            else {
                reject("Failed to fetch data.");
            }
        }, 1000);
    });
}
// Using the Promise
fetchData()
    .then(function (data) {
    console.log(data);
})
    .catch(function (error) {
    console.error(error);
});
