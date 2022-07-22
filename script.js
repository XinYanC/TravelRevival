// "Select" the element with ID "cart"
const cart = document.querySelector("#cart");
// Declare an empty array to hold the selected books.
cartItems = [];

// Select the button for three-body-probelm.
let button1 = document.querySelector("#toiletries");
let buttons = document.querySelectorAll(".add-button");

//let needs = {
//  toiletries: "toiletries",
//}

// Add a listener for the click event on button1
//button1.addEventListener('click', (e) => {]
buttons.forEach(button => button.addEventListener('click', () => {
  console.log("Button clicked");
  let toiletries = "toiletries";
  cartItems.push(toiletries);
  cartItems.sort();
  // This next line is gross. Make it nicer. Making an unordered list, li makes a new line and b makes them bold.
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  console.log("Added " + toiletries);
}));

// TODOs
//  1. Select all the relevant buttons.
//  2. Attach event listener to each button.
//  3. Lookup the full book name based on the button "id".
//  4. Handle the case where we click the same book twice

// const cart = document.querySelector("#cart");
// cartItems = [];

// let button1 = document.querySelector("#toiletries");
// button1.addEventListener('click', (e) => {
//   let need = "Toiletries";
//   cartItems.push(need);
//   cartItems.sort();
//   // This next line is gross. Make it nicer.
//   cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
//   console.log("Added " + need);
// });
