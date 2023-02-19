const startLoading = Date.now();
loadData();

for (i in resources) {
    //inventory square
    let currentInventorySquare = document.createElement("div");
    currentInventorySquare.className = "inventorySquare";
    currentInventorySquare.id = "inventorySquare" + i;
    document.getElementById("inventoryDiv").appendChild(currentInventorySquare);

    let currentInventorySquareID = currentInventorySquare.id;

    //text inside square
    let currentResourceCount = document.createElement("p");
    if (resources[i].type === 'countable') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount;
    } else if (resources[i].type === 'uncountable') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount + " kg";
    } else  if (resources[i].type === 'liquid') {
        currentResourceCount.innerHTML = resources[i].title + ": " + data.resources[i].amount + " L";
    }
    currentResourceCount.id = i + "Count";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceCount);

    //image
    let currentResourceImage = document.createElement("img");
    currentResourceImage.src = "assets/" + i.toString() + ".png";
    document.getElementById(currentInventorySquareID).appendChild(currentResourceImage);

    console.log("Successfully loaded data for " + i)
}

const loadingTime = Date.now() - startLoading;
console.log("Loaded successfully in " + loadingTime + " ms.")