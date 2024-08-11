import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

// Retrieve existing cart data
getCartProductFromLS();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLS();

  const currentprodElem = document.querySelector(`#card${id}`);
  let quantity = currentprodElem.querySelector(".productQuantity").innerText;
  let price = currentprodElem.querySelector(".productPrice").innerText;

  // Convert price and quantity to numbers
  price = parseFloat(price.replace("₹", "").trim());
  quantity = parseInt(quantity, 10);

  let existingprod = arrLocalStorageProduct.find(
    (currProd) => currProd.id === id
  );

  if (existingprod) {
    // Update the quantity and price if the product is already in the cart
    existingprod.quantity += quantity;
    existingprod.price = existingprod.quantity * price;
    arrLocalStorageProduct = arrLocalStorageProduct.map((currProd) =>
      currProd.id === id ? existingprod : currProd
    );

    // Save updated cart to localStorage
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

     } else {
    // Add new product to cart
    const newProduct = { id, quantity, price: price * quantity };
    arrLocalStorageProduct.push(newProduct);

    // Save new cart to localStorage
    localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));

  }

  // Update the cart button value
  updateCartValue(arrLocalStorageProduct);
  showToast("add",id);
};
