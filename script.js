// "Select" the element with ID "cart"
const cart = document.querySelector("#cart");
// Declare an empty array to hold the selected books.
cartItems = [];

// Select the button for three-body-probelm.
//let button1 = document.querySelector("#toiletries");
//let buttons = document.querySelectorAll(".add-button");

//let needs = {
//  toiletries: "toiletries",
//}

// Add a listener for the click event on button1
//button1.addEventListener('click', (e) => {]
// buttons.forEach(button => button.addEventListener('click', () => {
//   console.log("Button clicked");
//   let toiletries = "Refillable Silicone Toiletries Tubes";
//   let  bags = "Compression Bags for Clothes";
//   cartItems.push(toiletries);
//   cartItems.sort();
//   // This next line is gross. Make it nicer. Making an unordered list, li makes a new line and b makes them bold.
//   cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
//   console.log("Added " + toiletries);
// }));

// TODOs
//  1. Select all the relevant buttons.
//  2. Attach event listener to each button.
//  3. Lookup the full book name based on the button "id".
//  4. Handle the case where we click the same book twice

let tot = document.querySelector("#total");
let totalL = 0;

let toiletriesbutton = document.querySelector("#toiletries");
let tqq = document.querySelector("#toiletriesquatity");
let tq = 0;
let toiletry = [];

toiletriesbutton.addEventListener('click', (e) => {
  console.log("Button clicked");
  let toiletries = "Refillable Silicone Toiletries Tubes";
  tq++;
  console.log(tq);
  //let totalLL = 0;
  let price = 7.99;
  let tt = tq * price;
  totalL = (totalL + tt) - ((tq-1) * price);
  totalL = Math.round(100*totalL)/100;
  //totalL += totalLL;
  // cartItems.push(toiletries);
  // cartItems.sort();
  // cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  let each = "<p>" + tq + " - " + toiletries + ": $" + tt + " (at $" + price + " each)</p>";
  toiletry = [];
  console.log("1" + toiletry); 
  toiletry.push(each);
  console.log("2" + toiletry); 
  cartItems.splice(0, tq-1);
  cartItems.push(toiletry);
  console.log("3" + cartItems);
  cartItems.sort();
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  tqq.innerHTML = "Quantity: " + tq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + toiletries);
});

let clothesBagbutton = document.querySelector("#clothesBag");
let bqq = document.querySelector("#bagsquatity");
let bq = 0;
let bag = [];

clothesBagbutton.addEventListener('click', (e) => {
  console.log("Button clicked");
  let bagg = "Compression Bags for Clothes";
  bq++;
  //let totalLL = 0;
  let price = 12.99;
  let tt = bq * price;
  totalL = (totalL + tt) - ((bq-1) * price);
  totalL = Math.round(100*totalL)/100;
  let each = "<p>" + bq + " - " + bagg + ": $" + tt + " (at $" + price + " each)</p>";
  bag = [];
  bag.push(each); 
  console.log("a" + cartItems);
  console.log("b" + bag);
  cartItems.splice(0, bq-1);
  cartItems.push(bag);
  console.log("c" + cartItems);
  cartItems.sort();
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  bqq.innerHTML = "Quantity: " + bq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + bagg);
});


let kitbutton = document.querySelector("#kit");
let kqq = document.querySelector("#kitsquatity");
let kq = 0;
let kit = [];

kitbutton.addEventListener('click', (e) => {
  console.log("Button clicked");
  let kitt = "Convenience Kits";
  kq++;
  //let totalLL = 0;
  let price = 9.05;
  let tt = kq * price;
  totalL = (totalL + tt) - ((kq-1) * price);
  totalL = Math.round(100*totalL)/100;
  let each = "<p>" + kq + " - " + kitt + ": $" + tt + " (at $" + price + " each)</p>";
  kit = [];
  kit.push(each); 
  console.log("a" + cartItems);

  
  let indec = cartItems.indexOf(kit);
  console.log(indec);
  
  console.log("b" + kit);
  cartItems.splice(0, kq-1);
  cartItems.push(kit);
  console.log("c" + cartItems);
  cartItems.sort();
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  kqq.innerHTML = "Quantity: " + kq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + kitt);
});


