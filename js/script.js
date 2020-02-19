/* ****************************************************************************************
  BUSINESS LOGIC
*/

// Collection of item types
function Catalog() {
  this.types = [];
  this.new(id, name, description) = function(){
    const type = new Type(id, name, description, baseCost, addOns);
    this.types.push(type);
    return type;
  }
  this.find = function(id) {
    this.types.forEach(function(type){
      if (type.id === id) return type;
    });
  }
}

// Defines an item type
function Type(id, name, description, baseCost, addOns) {
  this.id = id;
  this.name = name;
  this.description = description;
  this.baseCost = baseCost;
  this.addOns = addOns;
}

// Collection of orders
function Orders() {
  this.orders = []
  this.index = 1000;
  this.new() = function(){
    const order = new Order(this.index++);
    this.orders.push(order);
    return order;
  };
}

// Defines an order, collection of items
function Order(number) {
  this.number = number;
  this.items = [];
  this.tax = 0;
  this.tip = 0;
  this.deliveryFee = 0;
  this.type = "";
  this.totalDue = 0;
  this.paymentCollected = 0;
  this.add(typeId) = function(){
    const item = new Item(typeId);
    this.items.push(item);
    return item;
  }
  this.list = function() {
    this.items.forEach
  }
}

// Defines an item
function Item() {
  this.typeId = 0;
  this.taxable = true;
  this.baseCost = 0;
  this.addonCost = 0;
  this.total = 0;
  this.prepNotes = "";
}

/*
  Calculates the cost of an item
*/
Item.propotype.calculateCost = function() {
  // Look up the item type
  // 
  
}

// Create the different products for sale
const catalog = new Catalog();
catalog.new(101, "Pepperphony Pizza", "Decadent melted faux cheese with crispy meatless pepperoni", 10.95,
  {
   "extra cheese" : 2.00
  });
catalog.new(202, "Sparkling Water", "Ice-cold pure refreshment, naturally calorie-free", 1.95)

// Create the orders object
const orders = new Orders();

/* ****************************************************************************************
  USER INTERFACE
*/


/*
  $(document).ready() executes after the page loads
*/
$(document).ready(function(){

  // respond to size and topping selections by continually updating the final cost in the user interface
  // create a pizza object with toppings and size properties
  // create a prototype method for the cost of the pizza, keeping it simple to start
  // create user interface to choose toppings and size

  /*
    Responds to presses of the submit button
  */
  $("#form").submit(function(e){

    // Prevent screen refresh on form submission
    e.preventDefault();
  });

});