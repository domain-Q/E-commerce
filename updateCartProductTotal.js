import { getCartProductFromLS } from "./getCartProduct.js";

export const updateCartProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLS();
  let initialValue = 0;

  // Calculate the total price
  let totalProductPrice = localCartProducts.reduce((accum, curElem) => {
    let productPrice = parseFloat(curElem.price) || 0;  // Use parseFloat to handle decimal values
    return accum + productPrice;
  }, initialValue);

//   console.log(totalProductPrice);

  // Update the UI elements if they exist
 
    productSubTotal.textContent = `₹${totalProductPrice}`;
    productFinalTotal.textContent = `₹${totalProductPrice + 50}`;

};
