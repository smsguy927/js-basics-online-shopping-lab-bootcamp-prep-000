var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 let product = {};
 product.itemName = item;
 product.itemPrice = Math.floor(Math.random() * 100 + 1);
 cart.push(product);
 return `${item} has been added to your cart.`
}

function viewCart() {
  // write your code here
  let message;
  let messageArr = [];
  if(cart.length > 0) {
    messageArr.push('In your cart, you have ');
    for(let i = 0; i < cart.length; i++) {
      if(cart.length - i === 1) {
        messageArr.push(`${cart[i][itemName]} at ${cart[i][itemPrice]}` );
      }else if(cart.length - i === 2) {
        messageArr.push(`${cart[i][itemName]} at ${cart[i][itemPrice]}, and ` );
      } else {
        messageArr.push(`${cart[i][itemName]} at ${cart[i][itemPrice]}, ` );
      }
    }
  } else {
    message = 'Your shopping cart is empty.';
  }
  return message;
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
