"use strict";
let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
const MandatoryExpenses = prompt(
  "Введите обязательную статью расходов в этом месяце"
);
const MoneyMandatoryExpenses = prompt("Во сколько обойдется?");

let appData = {
  budjet: money,
  timeData: time,
  expenses: {
    MandatoryExpenses,
    MoneyMandatoryExpenses
  },
  optionalExpenses: {},
  income: [],
  savings: false
};
let daybudjet = money / 30;
alert("Бюджет за один день " + daybudjet);
console.log(appData);
