Suppose you are working on an ecommerce website and you need to keep track of the number of times a product page is viewed. You want to use a WeakMap to store the product IDs as keys and the number of times the page is viewed as values. Additionally, you want to use a WeakSet to store the IDs of the products that have been added to the user's cart. 

**Write two functions:** 

1. ***incrementProductViews(productId):*** This function should take a product ID as input and increment the number of times the product page has been viewed by 1. If the product ID is not already present in the WeakMap, it should be added with an initial value of 1. 
1. ***addToCart(productId):*** This function should take a product ID as input and add it to the WeakSet if it is not already present. It should return a string "Product added to cart" if the product was added successfully, or "Product already in cart" if the product was already present in the WeakSet. 

**Example input:** 

let productViews = new WeakMap(); 

let cartItems = new WeakSet(); 

**Example usage:** 

incrementProductViews(123); // Product ID 123 is viewed for the first time incrementProductViews(123); // Product ID 123 is viewed for the second time 

addToCart(123); // "Product added to cart" addToCart(123); // "Product already in cart" **5 best practices to submit this assignment:** 

- Use descriptive variable and function names to make the code easy to read and understand. 
- Add comments to explain your thought process and any complex parts of the code. 
- Use proper indentation and formatting to make the code look clean and organized. 
- Use appropriate error handling to avoid any unexpected behavior. 
- Test the code thoroughly before submission to ensure it works correctly and efficiently. 
