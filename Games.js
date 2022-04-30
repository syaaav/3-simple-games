let seasons = ['Зима', 'Весна', 'Лето', 'Осень'];

function month () {
 	let n = Number(prompt("Введите номер месяца:"));
  
      if (isNaN(n) || n <= 0 || n > 12) {
            alert('Неправильно. Попробуйте ещё раз:');
      } else if (n == 12 || n == 1 || n == 2) {
            alert(seasons[0]);
      } else if  (n >= 3 && n <= 5) {
            alert(seasons[1]);
      } else if (n >= 6 && n <= 8) {
            alert(seasons[2]);
      } else if (n >= 9 && n <= 11) {
            alert(seasons[3]);
      }
} 

let fruits = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

function fruitsSort () {
      let fruitsNew = fruits.sort(() => Math.random() - 0.5);
      alert(fruitsNew.join(', '));

      let firstFruit = fruitsNew[0];
      let lastFruit = fruitsNew[fruitsNew.length - 1];

      let first = prompt("Какой фрукт был первым в списке?");
      let last = prompt("А какой фрукт был последним?");

      if (first.toUpperCase() == firstFruit.toUpperCase() && last.toUpperCase() == lastFruit.toUpperCase()) {
            alert("Круто! Вы угадали оба фрукта");
      } else if (first.toUpperCase() == firstFruit.toUpperCase() || last.toUpperCase() == lastFruit.toUpperCase()) {
            alert("Вы были близки к победе!");
      } else {
            alert("Увы! Вы не угадали");
      }
}

function askQuestion() {
      let question = "Зимой и летом одним цветом";
      let answer = ["елка", "ёлка", "Елка", "Ёлка"];
    
      for (let count = 3; count >= 0;) {
    
        let n = 0;
    
        let userAnswer = String(prompt(`Угадай загадку - ${question}`));
    
        for (let i = 0; i < answer.length; i++) {
          if (userAnswer === answer[i]) {
            alert("Ура! Ты угадал!");
            n++;
            break;
          }
        }
    
        count--;
    
        if (n === 1) {
          break;
        }
        if (count === 2) {
          alert("Не угадал. Даю тебе подсказку: ЭТО растет в лесу.");
        } else if (count === 1) {
          alert("Опять неудача! Даю тебе последнюю подсказку: ЭТО символ Нового года.");
        } else if (count === 0) {
          alert("Очень жаль, но количество попыток закончилось");
          break;
        }
      }
    }