//Part 1: Variable declarations & Conditionals
let userName = "Student";
let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome, " + userName + "!");
} else {
  console.log("Please log in.");
}


// Part 2: Custom Functions
// Function 1: Greet user
function greetUser(name) {
  return "Hello, " + name + "!";
}

// Function 2: Generate a list of numbers up to n
function generateNumberList(n) {
  let numbers = [];
  for (let i = 1; i <= n; i++) {
    numbers.push(i);
  }
  return numbers;
}


// Part 3: Loops examples
// Loop Example 1: For loop (printing 1–5)
for (let i = 1; i <= 5; i++) {
  console.log("For Loop Number: " + i);
}

// Loop Example 2: While loop
let counter = 1;
while (counter <= 3) {
  console.log("While Loop Count: " + counter);
  counter++;
}


// Part 4: DOM Interactions
// DOM Interaction 1: Display greeting on button click
document.getElementById("greetBtn").addEventListener("click", function() {
  let message = greetUser(userName);
  document.getElementById("greeting").innerText = message;
});

// DOM Interaction 2: Show a list of numbers in the DOM
document.getElementById("listBtn").addEventListener("click", function() {
  let listElement = document.getElementById("numberList");
  listElement.innerHTML = ""; // Clear old list
  let numbers = generateNumberList(5);
  numbers.forEach(function(num) {
    let li = document.createElement("li");
    li.textContent = "Number: " + num;
    listElement.appendChild(li);
  });
});

// DOM Interaction 3: Change background color
document.getElementById("changeColorBtn").addEventListener("click", function() {
  let colors = ["#f39c12", "#2ecc71", "#9b59b6", "#e74c3c", "#1abc9c"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});