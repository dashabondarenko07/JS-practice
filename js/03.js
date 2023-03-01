{
  // ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ

  function countProps(object) {
    let propCount = 0;

    const keys = Object.keys(object);
    const keysLength = keys.length;

    if (propCount < keysLength) {
      propCount = keysLength;
    }

    return propCount;
  }

  // countProps({ name: "Mango", age: 2 }); // 2
  // countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3
}

{
  const apartment = {
    descr: "Spacious apartment in the city center",
    rating: 4,
    price: 2153,
  };

  const keys = Object.keys(apartment);
  const values = Object.values(apartment);

  //   console.log("keys:", keys);
  //   console.log("values:", values);
}

{
  // ЗАДАЧА. ПОДСЧЁТ СВОЙСТВ 2.0

  function countProps(object) {
    let propCount = 0;

    const keys = Object.keys(object);
    const keysLength = keys.length;

    if (propCount < keysLength) {
      propCount = keysLength;
    }
  }

  return propCount;

  //   countProps({ name: "Mango", age: 2 }); // 2
  //   countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }); // 3
}

{
  // ЗАДАЧА. РАСХОДЫ НА ЗАРПЛАТУ

  function countTotalSalary(salaries) {
    let totalSalary = 0;

    values = Object.values(salaries);

    for (const value of values) {
      totalSalary += value;
    }

    return totalSalary;
  }

  //   countTotalSalary({ mango: 100, poly: 150, alfred: 80 }); // 330
  //   countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }); // 400
}

{
  // ЗАДАЧА. ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getProductPrice(productName) {
    for (const product of products) {
      if (productName === product.name) {
        return product.price;
      }
    }
    return null;
  }

  //   getProductPrice("Radar"); // 1300.
  //   getProductPrice("Grip"); // 1200.
}

{
  //ЗАДАЧА. КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА

  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function getAllPropValues(propName) {
    const values = [];

    const keys = Object.keys(...products);

    for (const key of keys) {
      if (propName === key) {
        for (const product of products) {
          values.push(product[key]);
        }
      }
    }

    return values;
  }

  // getAllPropValues('quantity') // [4, 3, 7, 9]
  // getAllPropValues('price') // [1300, 2700, 400, 1200]
}

{
  // ЗАДАЧА. ОБЩАЯ СТОИМОСТЬ ТОВАРА

  const products = [
    { name: "Radar", price: 1300, quantity: 4 },
    { name: "Scanner", price: 2700, quantity: 3 },
    { name: "Droid", price: 400, quantity: 7 },
    { name: "Grip", price: 1200, quantity: 9 },
  ];

  function calculateTotalPrice(productName) {
    let totalPrice = 0;

    for (const product of products) {
      const { name, price, quantity } = product;

      if (productName === name) {
        totalPrice = price * quantity;
        return totalPrice;
      }
    }

    return totalPrice;
  }

  //  calculateTotalPrice("Radar") // 5200
  //  calculateTotalPrice("Droid") // 2800
}

{
  const highTemperatures = {
    yesterday: 28,
    today: 26,
    tomorrow: 33,
  };

  const {
    yesterday: highYesterday,
    today: highToday,
    tomorrow: highTomorrow,
    icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
  } = highTemperatures;

  const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
  console.log("meanTemperature:", meanTemperature);
  console.log("highIcon:", highIcon);
}

{
  const colors = [
    { hex: "#f44336", rgb: "244,67,54" },
    { hex: "#2196f3", rgb: "33,150,243" },
    { hex: "#4caf50", rgb: "76,175,80" },
    { hex: "#ffeb3b", rgb: "255,235,59" },
  ];

  const hexColors = [];
  const rgbColors = [];

  for (const { hex, rgb } of colors) {
    hexColors.push(hex);
    rgbColors.push(rgb);
  }
}

{
  function calculateMeanTemperature(forecast) {
    const {
      today: { low: todayLow, high: todayHigh },
      tomorrow: { low: tomorrowLow, high: tomorrowHigh },
    } = forecast;

    const meanTemperature =
      (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;

    return meanTemperature;
  }

  //   calculateMeanTemperature({
  //     today: {
  //       low: 28,
  //       high: 32,
  //     },
  //     tomorrow: {
  //       low: 27,
  //       high: 31,
  //     },
  //   });
}

{
  const firstGroupScores = [64, 42, 93];
  const secondGroupScores = [89, 14, 51, 26];
  const thirdGroupScores = [29, 47, 18, 97, 81];

  const allScores = [
    ...firstGroupScores,
    ...secondGroupScores,
    ...thirdGroupScores,
  ];

  const bestScore = Math.max(...allScores);
  const worstScore = Math.min(...allScores);

  //   console.log(allScores);
  //   console.log(bestScore);
  //   console.log(worstScore);
}

{
  //ЗАДАЧА. КАРТОЧКИ ЗАДАЧ

  function makeTask(data) {
    const defaultData = {
      category: "General",
      priority: "Normal",
      completed: false,
    };

    const newData = { ...defaultData, ...data };

    return newData;
  }

  // makeTask({}); // { category: 'General', priority: 'Normal', completed: false }
  // makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }); // { category: 'Homemade', priority: 'Low', text: 'Take out the trash', completed: false }
}

{
  function add(...args) {
    let total = 0;

    for (const arg of args) {
      total += arg;
    }

    return total;
  }

  // add(15, 27) // 42
  // add(12, 4, 11, 48) // 75
}

{
  // ЗАДАЧА. МАССИВ СОВПАДЕНИЙ

  function findMatches(numbers, ...arg) {
    const matches = [];

    for (const number of numbers) {
      if (arg.includes(number)) {
        matches.push(number);
      }
    }

    return matches;
  }

  //   findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7); // [1, 2]
  //   findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2); // [17, 89, 2]
}

{
  // ЗАДАЧА. ЛАВКА ЗЕЛИЙ «У СТАРОЙ ЖАБЫ»
    
    const atTheOldToad = {
      potions: ["Speed potion", "Dragon breath", "Stone skin"],

      getPotions() {
        return this.potions;
      },
      addPotions(potionName) {
        return this.potions.push(potionName);
      },
      removePotions(potionName) {
        const potionIndex = this.potions.indexOf(potionName);
        return this.potions.splice(potionIndex, 1);
      },
      updatePotionName(oldName, newName) {
        const potionIndex = this.potions.indexOf(oldName);
        return this.potions.splice(potionIndex, 1, newName);
      },
    };
}
