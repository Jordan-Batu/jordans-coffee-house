const shopName = "Jordan's Coffee House";
const currentYear = new Date().getFullYear();
let runningTotal = 0;
const classicLatteStock = 20;
const caramelMacchiatoStock = 15;
const chocolateMochaStock = 12;
const orderTotal = 600;
const isMember = true;
const isShopOpen = true;

document.getElementById("shop-name").textContent = shopName;
document.getElementById("copyright").textContent = `© ${currentYear} ${shopName}`;

const productCountElement = document.getElementById("product-count");
if (productCountElement) {
    productCountElement.textContent = document.querySelectorAll(".product-card").length;
}

const classicLatteStockElement = document.getElementById("classic-latte-stock");
const caramelMacchiatoStockElement = document.getElementById("caramel-macchiato-stock");
const chocolateMochaStockElement = document.getElementById("chocolate-mocha-stock");
const orderTotalElement = document.getElementById("order-total");
const deliveryFeeElement = document.getElementById("delivery-fee");
const finalTotalElement = document.getElementById("final-total");
const shopStatusElement = document.getElementById("shop-status");

if (
    classicLatteStockElement &&
    caramelMacchiatoStockElement &&
    chocolateMochaStockElement &&
    orderTotalElement &&
    deliveryFeeElement &&
    finalTotalElement &&
    shopStatusElement
) {
    const getStockStatus = (stockCount) => {
        if (stockCount > 10) {
            return "In stock";
        } else if (stockCount >= 1) {
            return "Only a few left";
        } else {
            return "Sold out";
        }
    };

    classicLatteStockElement.textContent = `${classicLatteStock} - ${getStockStatus(classicLatteStock)}`;
    caramelMacchiatoStockElement.textContent = `${caramelMacchiatoStock} - ${getStockStatus(caramelMacchiatoStock)}`;
    chocolateMochaStockElement.textContent = `${chocolateMochaStock} - ${getStockStatus(chocolateMochaStock)}`;

    const freeDeliveryEligible = orderTotal >= 500 && isMember === true;
    const deliveryFee = freeDeliveryEligible ? 0 : 150;
    const finalTotal = orderTotal + deliveryFee;

    orderTotalElement.textContent = `₱${orderTotal.toFixed(2)}`;
    deliveryFeeElement.textContent = `₱${deliveryFee.toFixed(2)}`;
    finalTotalElement.textContent = `₱${finalTotal.toFixed(2)}`;
    shopStatusElement.textContent = isShopOpen ? "Open today" : "Closed today";
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
