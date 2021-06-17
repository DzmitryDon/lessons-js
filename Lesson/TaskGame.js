/* Methods:
setRange(min, max)
this method accepts min and max value of range of number to guess

guess()
this method returns solution candidate (you make an assumption based on range and previous assumptions)

lower()
this method is called if prev call of guess() returned number which is greater than answer

greater()
this method is called if prev call of guess() returned number which is lower than answer
 */

const loverI = "-";
const greaterI = "+";
const Finish = "=";

let minI = 1;
let maxI;
let midI;
let ArrI = [];

function GuessingGame() {
  alert("На вопрос Угадали число, отвечаем +, -, =");
  maxI = setRange(minI, maxI);

  for (let i = minI; i <= maxI; i++) {
    ArrI.push(i);
  }

  let userMes;

  minI = minI - 1;
  maxI = maxI - 1;
  let Answer;
  let numberUs;

  while (minI <= maxI) {
    numberUs = guess(minI, maxI, ArrI);
    midI = numberUs - 1;

    userMes = `Ваше число ${numberUs}. Угадали?`;
    Answer = prompt(userMes);

    if (Answer === Finish) {
      alert("Ура, Я угадал число.");
      break;
    } else if (Answer === loverI) {
      lower();
    } else if (Answer === greaterI) {
      greater();
    } else {
      alert("Что то пошло не так");
      break;
    }

    /* console.log(D); */
  }
}
function setRange(minR, maxR) {
  minR = 1;
  maxR = Math.round(Math.random() * 5000) + 3;
  const userMessage = `Загадайте число от ${minR} до ${maxR}.`;
  alert(userMessage);

  return maxR;
}

function guess(start, end, Arr) {
  let middleI = Math.floor((start + end) / 2);

  return Arr[middleI];
}

function lower() {
  maxI = midI - 1;
}

function greater() {
  minI = midI + 1;
}

GuessingGame();
