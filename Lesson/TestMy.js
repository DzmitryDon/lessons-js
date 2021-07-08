/* Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга (регистр букв не имеет значения). Важны только символы, пробелы или знаки препинания не учитываются. Пример:

Примеры:
anagram('finder', 'Friend') --> true
anagram('hello', 'bye') --> false

Анаграмма
Слова являются анаграммами другого слова, если имеют одинаковые буквы в одинаковом количестве, но в разном порядке. */

/* const sortWord = (str) => {
  return str.replace(/\s+/g, "").toLowerCase().split("").sort().join("");
};

function anagram(word1, word2) {
  if (word1.trim() === word2.trim()) {
    return false;
  } else {
    return sortWord(word1) === sortWord(word2);
  }
}

const testA = (word1, word2, Answer) => {
  let textTest;
  if (anagram(word1, word2) === Answer) {
    textTest = `++ Слова  ${word1} и ${word2} сравнены верно`;
  } else {
    textTest = `-- Слова  ${word1} и ${word2} сравнены НЕ верно`;
  }
  console.log(textTest);
};

function testAnagram() {
  testA("finder", "Friend", true);
  testA("hello", "byu", false);
  testA("aeroplane", "aeroplane", false);
  testA("aeroplane", "aeroplaning", false);
  testA("fi998877 hello world Dima", "F9i98787 Amid woldr llohe", true);
}

testAnagram(); */

//const Test1 = anagram("finder", "Friend");
//console.log(Test1);

/* Формулировка задачи 3
Напишите функцию, которая принимает строку в качестве аргумента и возвращает количество гласных, содержащихся в этой строке. Гласными являются «a», «e», «i», «o», «u».

Примеры:
findVowels('hello') // --> 2
findVowels('why') // --> 0 */

/* export const CountStr = (str) => {
  const StrArr = str.match(/[aeiou]/gi);
  return StrArr === null ? 0 : StrArr.length;
};

export const testCount = (word1, Answer) => {
  let textTest;
  if (CountStr(word1) === Answer) {
    textTest = `++ Слово  ${word1} посчитано верно`;
  } else {
    textTest = `-- Слово  ${word1} посчитано НЕ верно`;
  }
  console.log(textTest);
};

function testCountLetters() {
  testCount("hello", 2);
  testCount("hellow", 2);
  testCount("why", 0);
  testCount("aeroplaning", 5);
  testCount("aeroplaningetrsrovu", 8);
}

testCountLetters();
 */
export function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

console.log(fib(3));
/* alert( fib(3) ); // 2
alert( fib(7) ); // 13
alert(  fib(77) ); // 5527939700884757 */
