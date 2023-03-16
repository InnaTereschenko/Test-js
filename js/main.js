

// автоперевірка 16

// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//  const checkStorage = available < ordered;
//     message = "Not enough goods in stock!";
    
//   if (available > ordered) {
//   message = "Order is processed, our manager will contact you.";
  
// }
//  console.log(message);

//   // Change code above this line
//   return message;
// }

// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);


// автоперевірка 17

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
//  a += 2;
//  b -= 4;
// c *= 3;
// d /= 10;

//  console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// автоперевірка 18

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid * orderedQuantity;
//   const canPay = totalPrice > customerCredits;
//   message = "Insufficient funds!";
//   if (totalPrice <= customerCredits) {
//     const customerReminder = customerCredits - totalPrice;
    
//     message = `You ordered ${orderedQuantity} droids, you have ${customerReminder} credits left`;
//   }

//   console.log(message);
//   // Change code above this line
//   return message;
// }
// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);


// автоперевірка 19

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) { // Change this line
//     message =  'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) { // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }
// console.log(message);
//   return message;
// }

// checkPassword("оирвшргстдышвгд");
// checkPassword("54646lkdfj.nk");
// checkPassword("jqueryismyjam");


// автоперевірка 20
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//  if (ordered === 0) {
//   message = "There are no products in the order!";
//  } else if (ordered > available) {
//   message = "Your order is too large, there are not enough items in stock!"
// } else {
//   message = "The order is accepted, our manager will contact you";
// }

//   console.log(message);
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(70, 0);
// checkStorage(200, 20);
// checkStorage(200, 250);
// checkStorage(150, 0);


// автоперевірка  21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   console.log(isInRange);
//   // Change this line

//   return isInRange;
// }
// isNumberInRange(10, 30, 17);
// isNumberInRange(10, 30, 5);
// isNumberInRange(20, 50, 24);
// isNumberInRange(20, 50, 76);


// автоперевірка 22
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip';
//   console.log(canAccessContent);
//   // Change this line

//   return canAccessContent;
// }
// checkIfCanAccessContent("pro");
// checkIfCanAccessContent("starter");
// checkIfCanAccessContent("vip");
// checkIfCanAccessContent("free");

// автоперевірка  23
// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange;
//   console.log(isNotInRange);
//   // Change this line

//   return isNotInRange;
// }
// isNumberNotInRange(10, 30, 17);
// isNumberNotInRange(10, 30, 5);
// isNumberNotInRange(20, 50, 24);
// isNumberNotInRange(20, 50, 76);

// автоперевірка 24






// автоперевірка  25


//  console.log(0 || ('0' && {}));