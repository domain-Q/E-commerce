const cartValue = document.querySelector("#cartValue")
export const updateCartValue = (cartProducts)=>{
return cartValue.innerHTML = `
${cartProducts.length}`
}