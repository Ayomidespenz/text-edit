// const inputTask = document.getElementById("inputTask");
// const addInput = document.getElementById("addButton");
// const taskList = document.getElementById("taskList");
// loadTask();

// function addTask() {
//   const task = inputTask.value.trim();
//   if (task) {
//     createTaskElement(task);

//     inputTask.value = "";
//     saveLocal();
//   } else {
//     alert("please enter ur task");
//   }
// }
// addInput.addEventListener("click", addTask);
// function createTaskElement(task) {
//   const li = document.createElement("li");
//   li.textContent = task;

//   const editBtn = document.createElement('button');
//   editBtn.textContent = 'Edit';

//   const deleteBtn=document.createElement('button');
//   deleteBtn.textContent = 'Delete';

//   li.appendChild(editBtn);
//   li.appendChild(deleteBtn);
//   taskList.appendChild(li);

//   editBtn.addEventListener('click', function(){
//     const newTask = prompt('Edit task:', task);
//     if (newTask && newTask.trim()) {
//       task = newTask.trim();
//       li.textContent = task;
//       li.appendChild(editBtn);
//       li.appendChild(deleteBtn);
//       saveLocal();
//     }
//   });

//   deleteBtn.addEventListener('click', function(){
//     taskList.removeChild(li);
//     saveLocal();
//   });
// }

// function saveLocal() {
//   let tasks = [];
//   taskList.querySelectorAll("li").forEach(function (item) {
//     tasks.push(item.textContent.replace('Delete', '').trim());
//   });
//   localStorage.setItem("item", JSON.stringify(tasks));
// }
// function loadTask() {
//   const tasks = JSON.parse(localStorage.getItem("item")) || [];
//   tasks.forEach(createTaskElement);
// }

let Numbers = [1, 2, 3, 4, 5];
let highest = Numbers[0];

Numbers.forEach((Num) => {
  if (Num > highest) {
    highest = Num;
  }
});
console.log(highest);

let numbers = [12, 11, 13, 30, 10];
let highest2 = numbers[3];
for (let i = 1; i > numbers.length; i++) {
  if (numbers > highest2) {
    highest2 = numbers;
  }
}
console.log(highest2);

let today = "Monday";
let tommorow = "Tuesday";

const greet = () => {
  today === "Monday" ? alert("Hello Enginners") : alert("Hello Eniola");
};
// greet();

const cars = {
  Toyota: "Corolla",
  Lexus: "RX350",
  clothes: {
    LouisVuitton: "Whatever",
    Jordan: "Airforce",
  },
};

cars.Toyota = "Prado";
console.log(cars);

function sum(a, b, c) {
  return a + b + c;
}

console.log(sum(1, 3, 5));

// function primeNumber(a, b){
//   if(a % 1 === 1||a){
//     return a
//   } else if(b % 1 === 1||b){
//     return b
//   } else{
//     return "There is no Prime Number"
//   }
// }

// console.log(primeNumber(10, 1))

function primeNumber(Num) {
  if (Num < 2) return false;
  for (let i = 2; i < Num; i++) {
    if (Num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(primeNumber(7));
console.log(primeNumber(9));
console.log(primeNumber(5));

function evenNumber(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(evenNumber(36));

let firstArray = ["school", "church", "work"];
let secondArray = ["restaurant", "beach", "vacation"];

let thirdArray = [...firstArray, ...secondArray];
console.log(thirdArray);

// let reversedFirstArray = firstArray.reverse()
// console.log(reversedFirstArray);

// let fistArrayLastElement = firstArray.pop()
// console.log(fistArrayLastElement)

// let lastIndex = firstArray.length - 1;
// const lastArray = firstArray[lastIndex]
// console.log(lastArray);

const lastIndex = firstArray.at(-1);
console.log(lastIndex);

class Watch{
  constructor (Model, Year){
    this.Model = Model;
    this.Year = Year;
  }
  fake(){
    console.log(`This ${this.Model} ${this.Year} is just a fake`);
  }
  original(){
    console.log(`This ${this.Model} ${this.Year} is an original`)
  }
}

class Color extends Watch{
  constructor(Model, Year, Color){
    super(Model, Year)
    this.Color = Color;
  }
  temporary(){
    console.log(`The ${this.Color} color is just Temporary`)
  }
    permanent(){
    console.log(`The ${this.Color} color is Permanent`)
  }
}

const Watch1 = new Color(`Richard Millie`, 2020, `Red`);
console.log(Watch1.original() + Watch1.permanent());