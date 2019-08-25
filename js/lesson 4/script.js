"use script";
let money, time, dep;

// функция опроса и проверки
function start() {
  money = +prompt("Ваш бюджет на месяц?", "");
  time = prompt("Введите дату в формате YYYY-MM-DD", "");
  if (confirm("У Вас есть депозит?")) {
    dep = true;
  } else {
    dep = false;
  }
  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?", "");
  }
}

start();
//обьект данных гле записываются данные
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: dep,
  chooseOptExpenses: function() {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");

        appData.expenses[a] = b;
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
  },
  detectLevel: function() {
    if (appData.moneyPerDay < 100) {
      console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Это высокий уровень достатка!");
    } else {
      console.log("Произошла ошибка");
    }
  },
  checkSavings: function() {
    if (appData.savings == true) {
      let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
      appData.monthIncome = (save / 100 / 12) * percent;
      alert("Ваш доход с депозита в месяц: " + appData.monthIncome);
    }
  },
  chooseNotOptExpenses: function() {
    for (let i = 0; i < 3; i++) {
      let a = prompt(
          "Введите необязательную статью расходов в этом месяце",
          ""
        ),
        b = prompt("Во сколько обойдется?", "");

      if (
        typeof a === "string" &&
        typeof a != null &&
        typeof b != null &&
        a != "" &&
        b != "" &&
        a.length < 50
      ) {
        console.log("done");

        appData.optionalExpenses[i + 1] = b;
        console.log(appData.optionalExpenses);
      } else {
        console.log("bad result");
        i--;
      }
    }
  },
  chooseIncome: function() {
    let items = prompt(
      "Что принесет дополнительный доход? (Перечислите через запятую)",
      ""
    );
    if (typeof items === "string" && typeof items != null && items != "") {
      console.log("done");
      appData.income.push(items);
      appData.income = items.split(",");
      appData.income.push(prompt("Может что то еще?"));
      appData.income.sort();
    } else {
      console.log("Вы ввели некорректные данные или не ввели их вовсе");
    }
    appData.income.forEach(function(itemmassive, i) {
      alert("Способы доп. заработка: " + (i + 1) + " - " + itemmassive);
    });
  }
};

for (let key in appData) {
  console.log(
    "Наша программа включает в себя данные: " + key + " - " + appData[key]
  );
}
