{
  // ЗАДАЧА: ПРОВЕРКА ПАРОЛЯ (РАННИЙ ВОЗВРАТ)

  function checkPassword(password) {
    const ADMIN_PASSWORD = "erewrwrwrwk";

    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }

    return "Access denied, wrong password!";
  }

  // checkPassword("y7ujt") // "Access denied, wrong password!"
  // checkPassword("erewrwrwrwk") // "Welcome!"
}

{
  // ЗАДАЧА: СКЛАД ТОВАРОВ (РАННИЙ ВОЗВРАТ)
  // available - доступное количество товаров на складе
  // ordered - количество единиц товара в заказе

  function checkStorage(available, ordered) {
    if (ordered === 0) {
      return "Your order is empty!";
    }
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    }

    return "The order is accepted, our manager will contact you";
  }

  // checkStorage(100, 50) // "The order is accepted, our manager will contact you"
  // checkStorage(100, 130) // "Your order is too large, not enough goods in stock!"
  // checkStorage(70, 0) // "Your order is empty!"
}

{
  const fruits = ["apple", "plum", "pear", "orange"];

  const firstElement = fruits[0];
  const secondElement = fruits[1];
  console.log(firstElement, secondElement);

  console.log(fruits);
  fruits[1] = "peach";
  fruits[3] = "banana";
  console.log(fruits);

  const fruitsArrayLength = fruits.length;
  console.log(fruitsArrayLength);

  const lastElementIndex = fruits.length - 1;
  const lastElement = fruits[lastElementIndex];
  console.log(lastElement);
}

{
  // ЗАДАЧА: КРАЙНИЕ ЭЛЕМЕНТЫ МАССИВА
  function getExtremeElements(array) {
    const firstELement = array[0];
    const arrayLength = array.length;
    const lastElement = array[arrayLength - 1];

    return [firstELement, lastElement];
  }

  //   getExtremeElements([1, 2, 3, 4, 5]); // [1, 5]
  //   getExtremeElements(["Earth", "Mars", "Venus"]); //  ["Earth", "Venus"]
}

{
  // ЗАДАЧА: ГРАВИРОВКА УКРАШЕНИЙ
  //
  // Сервису гравировки украшений нужна функция,
  // которая бы автоматически считала цену гравировки,
  // в зависимости от количества слов и цены за слово.

  function calculateEngravingPrice(message, pricePerWord) {
    const words = message.split(" ");
    const wordsLength = words.length;
    const totalPrice = wordsLength * pricePerWord;
    return totalPrice;
  }

  // calculateEngravingPrice("JavaScript is in my blood", 10) // 50
  // calculateEngravingPrice("JavaScript is in my blood", 20) // 100
}

{
  function makeStringFromArray(array, delimiter) {
    const string = array.join(delimiter);
    return string;
  }
}

{
  // ЗАДАЧА: ГЕНЕРАТОР SLUG

  function slugify(title) {
    const a = title.toLowerCase();
    const b = a.split(" ");
    const slug = b.join("/");
    return slug;
  }
}

{
  const fruits = ["apple", "plum", "pear", "orange", "banana"];

  const firstTwoEls = fruits.slice(0, 2);
  console.log(firstTwoEls);

  const fruitsLength = fruits.length;
  const nonExtremeEls = fruits.slice(1, fruitsLength - 1);
  console.log(nonExtremeEls);

  const lastFourEls = fruits.slice(-4);
  console.log(lastFourEls);
}

{
  const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
  const newClients = ["Peach", "Houston"];

  const allClients = oldClients.concat(newClients);
  console.log(allClients);
}

{
  // ЗАДАЧА: КОМПОЗИЦИЯ МАССИВОВ
  function makeArray(firstArray, secondArray, maxLength) {
    const newArray = firstArray.concat(secondArray);
    const newArrayLength = newArray.length;

    if (newArrayLength > maxLength) {
      const allowedArray = newArray.slice(0, maxLength);
      return allowedArray;
    }

    return newArray;
  }

  // makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) // ["Mango", "Poly", "Ajax"]
  // makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) // ["Mango", "Poly", "Houston", "Ajax"]
  // Вызов makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) //  []
}

{
  const start = 5;
  const end = 12;

  for (let i = start; i <= end; i += 1) {
    console.log(i);
  }
}

{
  // ЗАДАЧА: СУММА ЧИСЕЛ (ЦИКЛ FOR)
  function calculateTotal(number) {
    let sum = 0;

    for (let i = 1; i <= number; i += 1) {
      sum = sum + i;
    }

    return sum;
  }

  // calculateTotal(1) // 1
  // calculateTotal(7) // 28
}

{
  const fruits = ["apple", "plum", "pear", "orange"];

  for (let i = 0; i < fruits.length; i += 1) {
    const fruit = fruits[i];
    console.log(fruit);
  }
}

{
  // ЗАДАЧА: ПОДСЧЁТ СУММЫ ПОКУПКИ
  function calculateTotalPrice(order) {
    let total = 0;

    for (const iterator of order) {
      total = total + iterator;
    }

    return total;
  }

  // calculateTotalPrice([12, 85, 37, 4]) // 138
  // calculateTotalPrice([164, 48, 291]) // 503
}

{
  // ЗАДАЧА: ПОИСК САМОГО ДЛИННОГО СЛОВА

  function findLongestWord(string) {
    const words = string.split(" ");
    let longestWord = "";
    let longestWordLength = longestWord.length;

    for (const word of words) {
      const wordLength = word.length;

      if (wordLength > longestWordLength) {
        longestWord = word;
        longestWordLength = wordLength;
      }
    }

    return longestWord;
  }

  // findLongestWord("Google do a roll") // Google
  // findLongestWord("May the force be with you") // force
}

{
  function createArrayOfNumbers(min, max) {
    const numbers = [];

    for (let i = min; i <= max; i += 1) {
      numbers.push(i);
    }

    return numbers;
  }

  createArrayOfNumbers(1, 3); // [1, 2, 3]
  createArrayOfNumbers(12, 15); //  [12, 13, 14, 15]
}

{
  // ЗАДАЧА: ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ

  function filterArrayOfNumber(numbers, value) {
    const filteredNumbers = [];

    for (const number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }

    return filteredNumbers;
  }

  //   filterArray([1, 2, 3, 4, 5], 4); // [5]
  //   filterArray([1, 2, 3, 4, 5], 5); // []
  //   filterArray([1, 2, 3, 4, 5], 3); // [4, 5]
}

{
  function checkFruit(fruit) {
    const fruits = ["apple", "plum", "pear", "orange"];

    const isFruit = fruits.includes(fruit);

    return isFruit;
  }

  //   checkFruit("plum"); // true
  //   checkFruit("mandarin"); // false
  //   checkFruit("pear"); // true
}

{
  // ЗАДАЧА: ОБЩИЕ ЭЛЕМЕНТЫ МАССИВОВ

  function getCommonElements(array1, array2) {
    const commonElements = [];

    for (const element of array1) {
      if (array2.includes(element)) {
        commonElements.push(element);
      }
    }

    return commonElements;
  }

  //   getCommonElements([1, 2, 3], [2, 1, 17, 19]); // [1, 2]
  //   getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]); // [12, 27, 3]
}

{
  function calculateTotalPrice(order) {
    let total = 0;

    for (const number of order) {
      total += number;
      // total = total + number
    }

    return total;
  }

  //   calculateTotalPrice([85, 5, 16]); // 106
  //   calculateTotalPrice([105, 1, 4]); // 110
}

{
  // 5 % 1 = 0;
  // 5, разделенное на 1, равно 5, а остаток - 0
  //
  // 5 % 2 = 1;
  //  5, разделенное на 2, равно 2, а остаток - 1

  const a = 3 % 1;
  const b = 4 % 3;
  const c = 11 % 4;
  const d = 12 % 7;
  const e = 8 % 3;
}

{
  // ЗАДАЧА: ЧЁТНЫЕ ЧИСЛА

  function getEvenNumbers(start, end) {
    const evenNumber = [];

    for (let i = start; i <= end; i += 1) {
      if (i % 2 === 0) {
        evenNumber.push(i);
      }
    }

    return evenNumber;
  }

  //   getEvenNumbers(6, 12); // [6, 8, 10, 12]
  //   getEvenNumbers(8, 8); // [8]
  //   getEvenNumbers(7, 7); // []
}

{
  // В переменную number должно записываться первое число
  // от start до end, которое делится на 5 без остатка.

  const start = 6;
  const end = 27;
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % 10 === 0) {
      number = i;

      break;
    }
  }

  console.log(number); // 10
}
