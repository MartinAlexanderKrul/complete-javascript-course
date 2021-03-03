// 'use strict';

function calcAverage(first, second, third) {
  return (first + second + third) / 3;
}

function checkWinner(avgTeamA, avgTeamB) {
  return avgTeamA >= avgTeamB * 2
    ? `TeamA win (${avgTeamA} : ${avgTeamB})`
    : avgTeamB >= avgTeamA * 2
    ? `TeamB win (${avgTeamB} : ${avgTeamA})`
    : "No team wins";
}

let teamA = calcAverage(44, 23, 71);
let teamB = calcAverage(65, 54, 49);

// console.log(checkWinner(teamA, teamB));

let teamA2 = calcAverage(85, 54, 41);
let teamB2 = calcAverage(23, 34, 27);

checkWinner(teamA2, teamB2);

let jonas = {
  firstName: "Jonas",
  lastName: "Shit",
  birthYear: 1975,
  job: "teacher",
  hasDrivingLicense: false,
  friends: new Array("Michael", "Martin", "Andy"),

  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  havingDrivingLicense: function () {
    return this.hasDrivingLicense ? "a" : "no";
  },

  getSummary: function () {
    return `${this.firstName} is ${this.calcAge()} years old ${
      this.job
    } and has ${this.havingDrivingLicense()} driving license.`;
  },
};

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his best friend is ${jonas.friends[0]}`);
// console.log(jonas.getSummary());

let mark = {
  name: "Mark Miller",
  weight: 78,
  height: 1.69,
  bmi: function () {
    return this.weight / (this.height * this.height);
  },
};

let john = {
  name: "John Smith",
  weight: 92,
  height: 1.95,
  bmi: function () {
    return this.weight / (this.height * this.height);
  },
};

let message =
  john.bmi() > mark.bmi()
    ? `${mark.name}'s BMI (${mark.bmi()}) is higher than ${
        john.name
      }'s (${john.bmi()}).`
    : `${mark.name}'s BMI (${mark.bmi()}) is higher than ${
        john.name
      }'s (${john.bmi()}).`;

// console.log(message);

const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
let tips = new Array();
let totals = [];

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

function calcAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[0] + tip);
}

console.log(bills);
console.log(calcAverage(bills));
console.log(tips);
console.log(calcAverage(tips));
console.log(totals);
console.log(calcAverage(totals));
