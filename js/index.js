{
  const pricePerDroid = 800;
  const orderedQuantity = 6;
  const deliveryFee = 50;
  const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
  //   console.log(message);
}

{
  function makeMessage(name, price) {
    const message = `You picked ${name}, price per item is ${price} credits`;
    return message;
  }

  //   makeMessage("cap <<Love>>", 350);
}

{
  function calculateTotalPrice(orderedQuantity, pricePerItem) {
    const totalPrice = orderedQuantity * pricePerItem;
    return totalPrice;
  }
  //   calculateTotalPrice(5, 100); //500
  //   calculateTotalPrice(8, 60); //480
  //   calculateTotalPrice(3, 400); //1200
}

{
  function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    const totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
    const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    return message;
  }

  //   makeOrderMessage(2, 100, 50); //"You ordered droids worth 250 credits. Delivery (50 credits) is included in total price."
  //   makeOrderMessage(4, 300, 100); //"You ordered droids worth 1300 credits. Delivery (100 credits) is included in total price."
  //   makeOrderMessage(10, 70, 200); //"You ordered droids worth 900 credits. Delivery (200 credits) is included in total price."
}

{
  function isAdult(age) {
    const passed = age >= 18;
    return passed;
  }
  //   isAdult(20); //true
  //   isAdult(14); //false
  //   isAdult(8); //false
}

{
  function isValidPassword(password) {
    const SAVED_PASSWORD = "jqueryismyjam";
    const isMatch = password === SAVED_PASSWORD;
    return isMatch;
  }

  //   isValidPassword("mangodab3st"); //false
  //   isValidPassword("kiwirul3z"); //false
  //   isValidPassword("jqueryismyjam"); //true
}

{
  function checkStorage(available, ordered) {
    let message;

    if (ordered > available) {
      message = "Not enough goods in stock!";
    } else {
      message = "Order is processed, our manager will contact you.";
    }

    return message;
  }

  //   checkStorage(100, 50); //'Order is processed, our manager will contact you.'
  //   checkStorage(100, 130); //'Not enough goods in stock!'
  //   checkStorage(200, 20); //'Order is processed, our manager will contact you.'
}

{
  let a = 5;
  let b = 10;
  let c = 15;
  let d = 20;

  a += 2;
  b -= 4;
  c *= 3;
  d /= 10;
}

{
  function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    const totalPrice = pricePerDroid * orderedQuantity;

    if (totalPrice > customerCredits) {
      message = "Insufficient funds!";
    } else {
      const creditsLeft = customerCredits - totalPrice;
      message = `You ordered ${orderedQuantity} droids, you have ${creditsLeft} credits left`;
    }

    return message;
  }

  // makeTransaction(3000, 5, 23000); //'You ordered 5 droids, you have 8000 credits left'
  // makeTransaction(1000, 3, 15000) //'You ordered 3 droids, you have 12000 credits left'
  // makeTransaction(5000, 10, 8000) //'Insufficient funds!'
}

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

    if (password === null) {
      message = "Canceled by user!";
    } else if (password === ADMIN_PASSWORD) {
      message = "Welcome!";
    } else {
      message = "Access denied, wrong password!";
    }

    return message;
  }

  //   checkPassword("mangohackzor"); //'Access denied, wrong password!'
  //   checkPassword(null); //'Canceled by user!'
  //   checkPassword("jqueryismyjam"); //'Welcome!'
}

{
  function checkStorage(available, ordered) {
    let message;

    if (ordered === 0) {
      message = "There are no products in the order!";
    } else if (ordered > available) {
      message = "Your order is too large, there are not enough items in stock!";
    } else {
      message = "The order is accepted, our manager will contact you";
    }

    return message;
  }

  //   checkStorage(100, 50); //'The order is accepted, our manager will contact you'
  //   checkStorage(100, 130); //'Your order is too large, there are not enough items in stock!'
  //   checkStorage(70, 0); //'There are no products in the order!'
}

{
  function isNumberInRange(start, end, number) {
    const isInRange = number >= start && number <= end; // Change this line
    return isInRange;
  }

  isNumberInRange(10, 30, 17); //true
  isNumberInRange(10, 30, 5); //false
  isNumberInRange(20, 50, 24); //true
}

{
  function checkIfCanAccessContent(subType) {
    const canAccessContent = subType === "pro" || subType === "vip"; // Change this line

    return canAccessContent;
  }

  //   checkIfCanAccessContent("pro"); //true
  //   checkIfCanAccessContent("starter"); //false
  //   checkIfCanAccessContent("vip"); //true
}

{
  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;

    if (totalSpent >= 50000) {
      discount = GOLD_DISCOUNT;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
      discount = SILVER_DISCOUNT;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
      discount = BRONZE_DISCOUNT;
    } else if (totalSpent < 5000) {
      discount = BASE_DISCOUNT;
    }

    return discount;
  }

  //   getDiscount(137000); //0.1
  //   getDiscount(46900); //0.05
  //   getDiscount(8250); //0.02
  //   getDiscount(1300); //0
}
