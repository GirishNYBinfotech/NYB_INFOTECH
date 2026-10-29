//async and await
function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 2000);
    });
}

getData()
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//Promise chaining to async/await
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully");
        }, 2000);
    });
}

async function getData1() {
    console.log("Fetching data...");
    const result = await fetchData();
    console.log(result);
}
getData1()

