/* Массив уникальных случайных цифр.
   Создадим массив для семи элементов;  
   Заполним его случайными цифрами от 0 до 10;  
   Цифры в массиве не должны повторяться;  
   Вывести этот массив в консоль;  
   Упорядочить массив;  
   Еще раз вывести его в консоль.
*/

const RandomArr = new Array(7);

for (let i = 0; i < 7; ) {
  let randomNum = Math.round(Math.random() * 11);

  /* console.time("Index");
  Index(RandomArr, randomNum);
  console.timeEnd("Index");

  console.time("Incl");
  Incl(RandomArr, randomNum);
  console.timeEnd("Incl"); */

  if (RandomArr.indexOf(randomNum) === -1) {
    RandomArr[i] = randomNum;
    i++;
  }
}

function Index(Arr1, numb) {
  return Arr1.indexOf(numb);
}

function Incl(Arr1, numb) {
  return Arr1.includes(numb);
}
//console.log(RandomArr);
RandomArr.sort(function compareNumbers(a, b) {
  return a - b;
});
//console.log(RandomArr);

/* Создадим массив с десятью случайными элементами от 0 до 100;  
   Напишем инструкцию, которая будет заменять все “0” на строку “zero”;  
   Выводим полученный массив в консоль.  
   прим. [12, 53, “2zero”, 18, 22, “1zerozero”, 43, 57, “5zero”, 1]; */

const RandomArr100 = new Array(10);
const RandomArr100Replace = new Array(10);

function getRandomArray() {
  for (let i = 0; i < 10; ) {
    let randomNum = Math.round(Math.random() * 101);
    if (RandomArr100.indexOf(randomNum) === -1) {
      RandomArr100[i] = randomNum;
      i++;
    }
  }
}

function replaceZeros(RandomArr) {
  for (let i = 0; i < 10; i++) {
    let Element;
    let Symbols = RandomArr[i].toString().split("");
    //console.log(Symbols);

    Element = "";
    for (key in Symbols) {
      if (Symbols[key] === "0") {
        Symbols[key] = "zero";
      }
      Element = Element + Symbols[key];
    }
    RandomArr100Replace[i] = Element;
  }
}
getRandomArray();
console.log(RandomArr100);
replaceZeros(RandomArr100);
console.log(RandomArr100Replace);
