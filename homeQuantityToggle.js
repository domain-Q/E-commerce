export const homeQuantityToggle = (event, id, stock) => {
  // getting the particualar card on which event is clicked
  const currentCardElement = document.querySelector(`#card${id}`);
  // console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity"); // getting the div in which quantity
  // console.log(productQuantity );
  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1; // converting string into number so the quantity can be changed dymnamically

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity++;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }
  if ((event.target.className === "cartDecrement")) {
    if (quantity > 1) {
      quantity--;
    }
  }
  productQuantity.innerText = quantity;
  productQuantity.setAttribute("data-quantity",quantity);
  return quantity;
};
