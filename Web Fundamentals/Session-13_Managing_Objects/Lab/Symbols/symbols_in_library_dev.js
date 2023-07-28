// Objective: The objective of this code is to demonstrate
// how library developers can use symbols to define internal properties
// and methods that are not part of the public API.

// Define the internal symbol used by the library
// Define the symbol for the internal method
const _calculateTotal = Symbol("calculateTotal");

class ShoppingCart {
  constructor() {
    this.items = [];
    this[_calculateTotal] = "internal value";
  }

  // Public API method to add items to the shopping cart
  addItem(item) {
    this.items.push(item);
  }

  // Public API method to get the total price of items in the cart
  // getTotal() {
  //   // Call the internal method to calculate the total
  //   return this[_calculateTotal]();
  // }

  // // Internal method to calculate the total price of items in the cart
  // [_calculateTotal]() {
  //   return this.items.reduce((total, item) => total + item.price, 0);
  // }
}

// Usage example
const cart = new ShoppingCart();

cart.addItem({ name: "Product 1", price: 10 });
cart.addItem({ name: "Product 2", price: 20 });
// cart[_calculateTotal]();
// console.log(cart.getTotal()); // Output: 30
// put a debug point and show if they can see this private internal property
// This is not accessible outside of library
console.log(cart.calculateTotal); // Undefined
