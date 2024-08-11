import { getCartProductFromLS } from "./getCartProduct.js";
import { updateCartProductTotal } from "./updateCartProductTotal.js";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity"); // getting the div in which quantity
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  let localCartProduct = getCartProductFromLS();
  let existingProduct = localCartProduct.find((curProd) => curProd.id === id);

  if (existingProduct) {
    quantity = existingProduct.quantity;
    localStoragePrice = existingProduct.price;
  } else {
    localStoragePrice = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity++;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity--;
    }
  }

  // Recalculate the product price
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2)
)
  // Update the product in the local cart array
  let updatedCartProduct = { id, quantity, price: localStoragePrice };
  localCartProduct = localCartProduct.map((curProd) => {
    return curProd.id === id ? updatedCartProduct : curProd;
  });

  // Update the local storage with the new cart products
  localStorage.setItem("cartProductLS", JSON.stringify(localCartProduct));

  // Update the UI (optional, if needed)
  productQuantity.textContent = quantity;
 productPrice.textContent = localStoragePrice.toFixed(2); // Format the price for the UI display


  updateCartProductTotal();
};
