// "Select" the element with ID "cart"
const cart = document.querySelector("#cart");
// Declare an empty array to hold the selected books.
cartItems = [];

// Select the button for three-body-probelm.
//let button1 = document.querySelector("#toiletries");
let buttons = document.querySelectorAll(".add-button");

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
let selected = 0;

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
  tt = Math.round(100*tt)/100;
  totalL = (totalL + tt) - ((tq-1) * price);
  totalL = Math.round(100*totalL)/100;
  //totalL += totalLL;
  // cartItems.push(toiletries);
  // cartItems.sort();
  // cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  let each = "<p>" + tq + " - " + toiletries + ": $" + tt + " (at $" + price + " each)</p>";
  toiletry = [];
  console.log("toiletry1 " + toiletry); 
  toiletry.push(each);
  console.log("toiletryPUSHEACH2 " + toiletry); 
  // cartItems.splice(0, tq-1);
  // cartItems.splice(0, tq-1);
  // cartItems.push(toiletry);
  // cartItems.unshift(toiletry);
  // console.log("cartItemsUNSHIFT3 " + cartItems)
  // cartItems.splice(1, 1);
  // console.log("cartItemsSPLICE4 " + cartItems);
  // cartItems.sort();
  // cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  tqq.innerHTML = "Quantity: " + tq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + toiletries);
  selected++;
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
  tt = Math.round(100*tt)/100;
  totalL = (totalL + tt) - ((bq-1) * price);
  totalL = Math.round(100*totalL)/100;
  let each = "<p>" + bq + " - " + bagg + ": $" + tt + " (at $" + price + " each)</p>";
  bag = [];
  bag.push(each); 
  // console.log("1" + cartItems);
  // console.log("2" + bag);
  // // cartItems.splice(0, bq-1);
  // // cartItems.splice(0, bq-1);
  // // cartItems.push(bag);
  // cartItems.unshift(bag);
  // console.log("cartItemsUNSHIFT3 " + cartItems)
  // // cartItems.splice(0, bq-1);
  // cartItems.splice(1, 1);
  // console.log("cartItemsSPLICE4 " + cartItems);
  // cartItems.sort();
  // cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
  bqq.innerHTML = "Quantity: " + bq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + bagg);
  selected++;
});


let kitbutton = document.querySelector("#kit");
let kqq = document.querySelector("#kitsquatity");
let kq = 0;
let kit = [];

kitbutton.addEventListener('click', (e) => {
  console.log("Button clicked");
  let kitt = "Convenience Kits";
  kq++;
  let price = 9.05;
  let tt = kq * price;
  tt = Math.round(100*tt)/100;
  totalL = (totalL + tt) - ((kq-1) * price);
  totalL = Math.round(100*totalL)/100;
  let each = "<p>" + kq + " - " + kitt + ": $" + tt + " (at $" + price + " each)</p>";
  kit = [];
  kit.push(each);
  kqq.innerHTML = "Quantity: " + kq;
  tot.innerHTML = "Total: $" + totalL;
  console.log("Added " + kitt);
  selected++;
});


// let backpackbutton = document.querySelector("#backpack");
// let bpqq = document.querySelector("#backpackquatity");
// let bpq = 0;
// let back = [];

// backpackbutton.addEventListener('click', (e) => {
//   console.log("Button clicked");
//   let backk = "Convenience Kits";
//   bpq++;
//   let price = 9.05;
//   let tt = bpq * price;
//   tt = Math.round(100*tt)/100;
//   totalL = (totalL + tt) - ((bpq-1) * price);
//   totalL = Math.round(100*totalL)/100;
//   let each = "<p>" + bpq + " - " + backk + ": $" + tt + " (at $" + price + " each)</p>";
//   back = [];
//   back.push(each);
//   bpqq.innerHTML = "Quantity: " + bpq;
//   tot.innerHTML = "Total: $" + totalL;
//   console.log("Added " + backk);
//   selected++;
// });


buttons.forEach(button => button.addEventListener('click', () => {
  console.log("all");
  cartItems.splice(1, selected);
  cartItems.unshift(toiletry);
  console.log("cartItemsUNSHIFT3 " + cartItems)
  // cartItems.splice(1, selected);
  console.log("cartItemsSPLICE4 " + cartItems);
  cartItems.unshift(bag);
  console.log("cartItemsUNSHIFT3 " + cartItems);
  console.log("cartItemsSPLICE4 " + cartItems);
  cartItems.unshift(kit);
  console.log("cartItemsUNSHIFT3 " + cartItems);
  console.log("cartItemsSPLICE4 " + cartItems);
  // cartItems.unshift(back);
  // console.log("cartItemsUNSHIFT3 " + cartItems);
  // console.log("cartItemsSPLICE4 " + cartItems);
  cartItems.sort();
  cart.innerHTML = "<UL><LI><b>" + cartItems.join("</b></LI><LI><b>") + "</b></LI></UL>";
}));