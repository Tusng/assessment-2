///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(((totalPrice, currItem) => totalPrice + currItem['price']), 0);
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    cartTotal = cartTotal * tax + cartTotal;
    return cartTotal - couponValue;
}


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Customer Object should contain:
    _Customer Name as String data type
    _Phone number as String type
    _Email as String type
    _hasCoupon as boolean type
    _couponValue as int type
    _Address as object

    Customer name, phone number, and email address allow the restaurant to send a receipt to a customer
    Address allows restaurant to check for delivery eligibility and deliver food if it's within the restaurant delivery radius
        Object type was choosen here for address since an address can be broken down into street number, street name, city, state, and zip code.
        And each of these parts can be different data type
    hasCoupon allows restaurant to know if customer has a coupon, and they possible want to use their coupon
    couponValue allows restaurant to subtract the discounts from a customer total when they use their coupon
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customer = {
    name: "Tu Nguyen",
    phoneNumber: "333-444-9999",
    email: "hackBright@gmail.com",
    hasCoupon: false,
    couponValue: 10,
    address: {
        streetNumber: "1100",
        streetName: "Engineering",
        city: "Cybersecurity",
        state: "Techology",
        zipCode: 9999
    }
};