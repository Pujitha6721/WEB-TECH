// Select elements
const inputBox = document.querySelector("#searchInput");
const outputSection = document.querySelector("#results");
const infoText = document.querySelector("#message");

let delayTimer = null;

// Trigger search with debounce
inputBox.addEventListener("keyup", () => {

    clearTimeout(delayTimer);

    delayTimer = setTimeout(() => {
        const keyword = inputBox.value.trim();
        fetchProducts(keyword);
    }, 400); // slightly changed delay
});


async function fetchProducts(keyword) {

    // If input empty, clear everything
    if (!keyword) {
        outputSection.innerHTML = "";
        infoText.textContent = "";
        return;
    }

    try {
        const response = await fetch("products.json");

        if (!response.ok) {
            throw new Error("Data not available");
        }

        const productList = await response.json();

        // Case-insensitive filtering
        const matchedItems = productList.filter(item =>
            item.name.toLowerCase().includes(keyword.toLowerCase())
        );

        renderProducts(matchedItems);

    } catch (err) {
        outputSection.innerHTML = "";
        infoText.textContent = "Unable to load product data.";
    }
}


function renderProducts(items) {

    outputSection.innerHTML = "";

    if (items.length === 0) {
        infoText.textContent = "No matching products found.";
        return;
    }

    infoText.textContent = "";

    items.forEach(item => {

        const card = document.createElement("div");
        card.classList.add("product");

        card.innerHTML = `
            <h4>${item.name}</h4>
            <p>Price: ₹${item.price}</p>
            <p>Category: ${item.category}</p>
        `;

        outputSection.appendChild(card);
    });
}
