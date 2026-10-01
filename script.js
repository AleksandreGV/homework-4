// TASK 1

function calculateDiscount(price, discount) {
  return price - (price * discount) / 100;
}

let answer = calculateDiscount(200, 20);
console.log(answer); 


function checkPrice(price) {
 if (price < 100){
    return "Cheap product"
 } else return "Expensive product"
} console.log(checkPrice(answer))


// TASK 2

const player = {
  name: "Shadow",
  health: 75,
  level: 12,
};

function getPlayerHealth(health) {
  if (health > 0) {
    return "Player is alive";
  } else {
    return "Player is defeated";
  }
}

function getPlayerInfo(name, level) {
  return `${name} - Level ${level}`;
}

console.log(getPlayerInfo(player.name,player.level), getPlayerHealth(player.health));


// TASK 3





// TASK 4


const student = {
  name: "Nika",
  score: 78,
};


function checkScore(score) {
  if(score >= 50){
    return "Passed"
  } else (score < 50);{
    return "Failed"
  }
}


function createStudentResult(name, result) {
  return `${name}: ${result}`;
}

const result = checkScore(student.score);

console.log(createStudentResult(student.name, result));


// TASK 5



const trip = {
  country: "Japan",
  days: 7,
  budget: 2100,
};

function calculateDailyBudget(budget, days) {
  return budget / days
}

const dailyMoney = trip.budget / trip.days


function checkDailyBudget(dailyBudget) {
  if (dailyMoney >= 200){
    return "Comfortable trip"
  } else{
    return "Budget trip"
  }
}

const dailyBudget = calculateDailyBudget(trip.budget, trip.days);

console.log(dailyBudget);
console.log(checkDailyBudget(dailyBudget));


// TASK 6


