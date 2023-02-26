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

{
  function checkStorage(available, ordered) {
    let message;

    message =
      ordered > available
        ? "Not enough goods in stock!"
        : "The order is accepted, our manager will contact you";
    return message;
  }

  //   checkStorage(100, 50); //'The order is accepted, our manager will contact you'
  //   checkStorage(100, 130); //'Not enough goods in stock!'
  //   checkStorage(200, 20); //'The order is accepted, our manager will contact you'
}

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    // Change code below this line
    message =
      password === ADMIN_PASSWORD
        ? "Access is allowed"
        : "Access denied, wrong password!";
    // Change code above this line
    return message;
  }

  //   checkPassword("jqueryismyjam"); //'Access is allowed'
  //   checkPassword("angul4r1sl1f3"); //'Access denied, wrong password!'
  //   checkPassword("r3actsux"); //'Access denied, wrong password!'
}

{
  function getSubscriptionPrice(type) {
    let price;

    switch (type) {
      case "starter":
        price = 0;
        break;

      case "professional":
        price = 20;
        break;

      case "organization":
        price = 50;
        break;
    }

    return price;
  }

  //   getSubscriptionPrice("_stаrter_"); //undefined
  //   getSubscriptionPrice("professional"); //20
  //   getSubscriptionPrice("organization"); //50
  //   getSubscriptionPrice("starter"); //0
}

{
  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;

    switch (password) {
      case null:
        message = "Canceled by user!";
        break;

      case ADMIN_PASSWORD:
        message = "Welcome!";
        break;

      default:
        message = "Access denied, wrong password!";
    }

    return message;
  }
  // checkPassword(null) //'Canceled by user!'
  // checkPassword('polyhax') //'Access denied, wrong password'
  // checkPassword('jqueryismyjam') //'Welcome!'
}

{
  function getShippingCost(country) {
    let message;

    switch (country) {
      case "China":
        message = "Shipping to China will cost 100 credits";
        break;

      case "Chile":
        message = "Shipping to Chile will cost 250 credits";
        break;

      case "Australia":
        message = "Shipping to Australia will cost 170 credits";
        break;

      case "Jamaica":
        message = "Shipping to Jamaica will cost 120 credits";
        break;

      default:
        message = "Sorry, there is no delivery to your country";
    }

    return message;
  }

  //   getShippingCost("Australia"); //Shipping to Australia will cost 170 credits'
  //   getShippingCost("Germany"); //'Sorry, there is no delivery to your country'
  //   getShippingCost("China"); //'Shipping to China will cost 100 credits'
  //   getShippingCost("Chile"); //'Shipping to Chile will cost 250 credits'
  //   getShippingCost("Jamaica"); //'Shipping to Jamaica will cost 120 credits'
}

{
  function getNameLength(name) {
    const nameLength = name.length;
    const message = `Name ${name} is ${nameLength} characters long`; // Change this line

    return message;
  }

  //   getNameLength("Poly"); //Name Poly is 4 characters long
  //   getNameLength("Harambe"); //Name Harambe is 7 characters long
  //   getNameLength("Billy"); //Name Billy is 5 characters long
}

{
  const courseTopic = "JavaScript essentials";

  const courseTopicLength = courseTopic.length;
  const firstElement = courseTopic[0];
  const lastElement = courseTopic[courseTopicLength - 1];

  // Значение переменной courseTopic это строка 'JavaScript essentials'
  // Значение переменной courseTopicLength это число 21
  // Значение переменной firstElement это строка 'J'
  // Значение переменной lastElement это строка 's'
}

{
  function formatMessage(message, maxLength) {
    let result;

    if (message.length > maxLength) {
      const subString = message.slice(0, maxLength);
      result = subString + "...";
    } else {
      result = message;
    }

    return result;
  }

  //   formatMessage("Curabitur ligula sapien", 16); //'Curabitur ligula...'
  //   formatMessage("Curabitur ligula sapien", 23); //'Curabitur ligula sapien'
  //   formatMessage("Vestibulum facilisis purus nec", 20); //'Vestibulum facilisis...'
}

{
  function normalizeInput(input) {
    const normalizedInput = input.toLowerCase(); // Change this line

    return normalizedInput;
  }

  //   normalizeInput("Hello world"); //'hello world'
  //   normalizeInput("This ISN'T a SpaM"); //'this isn't a spam'
  //   normalizeInput("Big SALES"); //'big sales'
}

{
  function checkForName(fullName, name) {
    const result = fullName.includes(name); // Change this line
    return result;
  }

  //   checkForName("Egor Kolbasov", "Egor"); //true
  //   checkForName("Egor Kolbasov", "egor"); //false
  //   checkForName("Egor Kolbasov", "egOr"); //false
}

{
  function checkForSpam(message) {
    let result;

    const normalizeMessage = message.toLowerCase();

    result =
      normalizeMessage.includes("spam") || normalizeMessage.includes("sale");

    return result;
  }

  //   checkForSpam("Latest technology news"); //false
  //   checkForSpam("JavaScript weekly newsletter"); //false
  //   checkForSpam("Get best sale offers now!"); //true
}