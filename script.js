const shopName = "Jordan's Coffee House";
const currentYear = new Date().getFullYear();
let runningTotal = 0;

document.getElementById("shop-name").textContent = shopName;
document.getElementById("copyright").textContent = `© ${currentYear} ${shopName}`;

const productCountElement = document.getElementById("product-count");
if (productCountElement) {
    productCountElement.textContent = document.querySelectorAll(".product-card").length;
}

const quantityInput = document.getElementById("quantity");
const subtotalElement = document.getElementById("subtotal");
const priceElement = document.querySelector("[data-price]");

if (quantityInput && subtotalElement && priceElement) {
    const unitPrice = Number(priceElement.dataset.price);

    const updateSubtotal = () => {
        const quantity = Number(quantityInput.value);
        const isValidQuantity =
            Number.isInteger(quantity) &&
            quantity >= Number(quantityInput.min) &&
            quantity <= Number(quantityInput.max);
        runningTotal = isValidQuantity ? unitPrice * quantity : 0;
        subtotalElement.textContent = `₱${runningTotal.toFixed(2)}`;
    };

    quantityInput.addEventListener("input", updateSubtotal);
    updateSubtotal();
}

console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Running total:", runningTotal);
