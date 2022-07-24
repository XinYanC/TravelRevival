let buyButtons = document.querySelectorAll(".active");
let purchase = document.querySelector("#choose");
let tprice = document.querySelector("#ticket_price");
let plane_tic_price = 0;
let orgprice = 0;

buyButtons.forEach(button => button.addEventListener('click', () => {
  purchase.classList.remove("hidden");
  plane_tic_price = Math.random() * (1000 - 100) + 100;
  plane_tic_price = Math.round(100*plane_tic_price)/100;
  orgprice = plane_tic_price;
  tprice.innerHTML = "<p>The ticket price for that day is <strong>$" + plane_tic_price + "</strong></p><br>";
}));

let tot_price = document.querySelector("#total_tic_price");
let carryonfeefeeprice = document.querySelector("#carryonfee");
let checkedbagfeeprice = document.querySelector("#checkedbagfee");
let oversizebagfeeprice = document.querySelector("#oversizebagfee");

let num_ticketsselect = document.querySelector("#num_tickets");
let num_typeselect = document.querySelector("#num_type");
let num_carryselect = document.querySelector("#num_carry");
let num_checkedselect = document.querySelector("#num_checked");
let num_oversizeselect = document.querySelector("#num_oversize");

let trip_tot = document.querySelector("#tic_total");

let toto = 0;
const fee = 20;


num_ticketsselect.addEventListener("change", () => {
  console.log("New Selection!");
  plane_tic_price *= Number(num_tickets.value);
  console.log(plane_tic_price);
  toto = plane_tic_price;
  toto = Math.round(100*toto)/100;
  total_tic_price.innerHTML = "<p><strong>Airline Ticket:</strong> $" + plane_tic_price + " (for " + num_tickets.value + " ticket at $" + orgprice + " each)</p>";
  trip_tot.innerHTML = "<p>Total: $" + Number(toto + fee) + "</p>";
});

num_typeselect.addEventListener("change", () => {
  let typee = "";
  if (num_type.value == 2){
    typee = "round-way"
  }
  else{
    typee = "one-way"
  }
  console.log("New Selection!");
  let change = Number(num_type.value) * orgprice;
  change = Math.round(100*change)/100;
  plane_tic_price *= Number(num_type.value);
  toto = plane_tic_price;
  toto = Math.round(100*toto)/100;
  total_tic_price.innerHTML = "<p><strong>Airline Ticket:</strong> $" + plane_tic_price + " (for " + num_tickets.value + " " + typee + " ticket at $" + change + " each)</p>";
  trip_tot.innerHTML = "<p>Total: $" + Number(toto + fee) + "</p>";
});

num_carryselect.addEventListener("change", () => {
  console.log("New Selection!");
  let carry = 0;
  carry += (Number(num_tickets.value) * Number(num_carry.value));
  toto += carry;
  toto = Math.round(100*toto)/100;
  carryonfeefeeprice.innerHTML = "<p><strong>Carry On Fee:</strong> $" + carry + " (for " + Number(num_tickets.value) + " carry on bag at $10 each)</p>";
  trip_tot.innerHTML = "<p>Total: $" + Number(toto + fee) + "</p>";
});

num_checkedselect.addEventListener("change", () => {
  console.log("New Selection!");
  let checked = 0;
  let intotal = Number(num_tickets.value) * Number(num_checked.value);
  checked += (Number(num_tickets.value) * Number(num_checked.value) * 20);
  toto += checked;
  toto = Math.round(100*toto)/100;
  checkedbagfeeprice.innerHTML = "<p><strong>Checked Baggage Fee:</strong> $" + checked + " (for " + (intotal) + " carry on bag at $20 each)</p>";
  trip_tot.innerHTML = "<p>Total: $" + Number(toto + fee) + "</p>";
});

num_oversizeselect.addEventListener("change", () => {
  console.log("New Selection!");
  let checked = 0;
  let intotal = Number(num_tickets.value) * Number(num_oversize.value);
  checked += (Number(num_tickets.value) * Number(num_oversize.value) * 75);
  toto += checked;
  toto = Math.round(100*toto)/100;
  oversizebagfeeprice.innerHTML = "<p><strong>Checked Baggage Fee:</strong> $" + checked + " (for " + (intotal) + " carry on bag at $20 each)</p>";
  trip_tot.innerHTML = "<p>Total: $" + Number(toto + fee) + "</p>";
})