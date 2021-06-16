/* Найти последовательность Хэеса, для числа должно быть выдано сообщение, с самой последовательностью, количеством шагов, которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. 

Последовательность Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, 
дел им на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не будет равно 1.
*/

function isnumber(x) {
  if (isNaN(Number(x)) || x === null) {
    return 1;
  } else {
    return Number(x);
  }
}
function showHaesMessage(numero) {
  let ArrH = [numero];

  while (numero != 1) {
    if (numero % 2 === 0) {
      numero = evenNumber(numero);
      ArrH.push(numero);
    } else {
      numero = oddNumber(numero);
      ArrH.push(numero);
    }
  }
  const HaesArr = ArrH.join();

  const HaesMessage = `Последовательность: ${HaesArr}. Количество шагов: ${
    ArrH.length
  }. Вершина: ${Math.max(...ArrH)}.`;
  alert(HaesMessage);
}

function evenNumber(numero) {
  return numero / 2;
}

function oddNumber(numero) {
  return numero * 3 + 1;
}

const numberUser = prompt("Введи число...");
const numberresult = isnumber(numberUser);

showHaesMessage(numberresult);
