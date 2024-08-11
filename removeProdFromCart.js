import { getCartProductFromLS } from "./getCartProduct.js";
import { showToast } from "./showToast.js";
import { updateCartValue } from "./updateCartValue.js";

export const removeProdFromCart = (id) => {
  let cartProducts = getCartProductFromLS();
 
  cartProducts = cartProducts.filter((currProd) => currProd.id !== id);
  // console.log(cartProducts)
  //update the data on local storage after removing the item
// removeProdFromCart.js
localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

    //to remove the div from the cart section
  let removeDiv = document.getElementById(`card${id}`)
  if (removeDiv){
    removeDiv.remove();

    showToast("delete",id)
  }

  updateCartValue(cartProducts);
};