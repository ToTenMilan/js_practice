/* global $*/
var JSCart = {
  updateCartItemCount : function (){
    // alert("updating the item count");
    var items = $('#cart div.cart-item');
    var total = 0;
    items.each(function() {
      var value = parseInt($(this).find('span.qty').text());
      total += value;
      $('span#cart-quantity').text(total);
    });
  },
  
  updateCartTotal : function(){
    // alert("updating cart total");
    var items = $('#cart div.cart-item');
    var total = parseFloat(0);
    items.each(function() {
      var quantity = parseInt($(this).find('span.qty').text());
      var price = parseFloat($(this).find('span.price').text());
      // alert(price);
      var subtotal = quantity * price;
      // alert(subtotal);
      total += subtotal;
      $('span#cart-price').text(total);
    });
  },
  
  updateCart : function(){
    this.updateCartItemCount();
    this.updateCartTotal();
    // alert("updating the cart");
  }
};

var itemSlugCounter = 1;
var cartSlugCounter = 1;

$(function(){ // document.ready wrapper
  var inventory = $(rawInventory);
  var prototypeItem = $('#prototype-item');
  prototypeItem.detach(); // detach prototype (hardcoded)html from DOM
  inventory.each(function() { // iterate over each element in inventory to create list of available products
    // alert("inserting " + this.name);
    var item = prototypeItem.clone(); // clone the prototype html
    item.find('h3').text(this.name); // select h3 of the prototype and insert object name there
    $('#inventory').append(item);
    
    item.find('span.price').text(this.price);
    item.find('span.qty').text(this.stock);
    
    var slug = "product_" + itemSlugCounter;
    itemSlugCounter++;
    $('#prototype-item').attr('id', slug); // modify the item id to be unique
    // item.find('div#prototype-item').attr('id', slug); // not working
    
    item.on('click', function(event) { // while clicking on single item div scope
      // alert("adding " + $(this).attr('id') + " to teh cart");
      event.preventDefault();
      var targetId = $(this).attr('id');
      var target = $('div#cart div#' + targetId); // => 'div#cart_product_4' -- wrong
      console.log("target: " + target, "targetId: " + targetId);
      var quantity = target.find('span.qty');
      var intQuantity = parseInt(quantity.text());
      intQuantity++;
      $(quantity).text(intQuantity);
      JSCart.updateCart();
    });
  });
  
  var cartItem = $('#prototype-cart');
  cartItem.detach();
  inventory.each(function() { // list all products in cart
    var item = cartItem.clone();
    item.find('h3').text(this.name);
    item.find('span.price').text(this.price);
    $('#cart').append(item);
    // $('#prototype-cart').attr('id', slug); // modify the item id to be unique
    var slug = "product_" + cartSlugCounter;
    cartSlugCounter++;
    $('#prototype-cart').attr('id', slug);
  });
  
});