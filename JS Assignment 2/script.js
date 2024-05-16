// Q1. Write code to display from 1 to 100 but just even numbers.
for (let i = 2; i <= 100; i += 2) {
    console.log(i);
}

// Q2. Write a function to calculate which can add, subtract, multiply and divide two numbers. Use switch inside function.

let x, y, res, ch

    console.log("Enter 1 For Addition:")
    console.log("Enter 2 For Subtraction:")
    console.log("Enter 3 For Multiplication:")
    console.log("Enter 4 For Division :")
    console.log("Enter 5 For Modulus :")
    
    ch = parseInt(prompt("Enter your choice:"))

    if (ch > 0 && ch < 6) {
      x = parseInt(prompt("Enter first number"))
      y = parseInt(prompt("Enter second number"))
    }

    switch (ch) {
      case 1:
      res = x + y;
      console.log("\nResult is :" + res)
      break

      case 2:
      res = x - y
      console.log("\nResult is :" + res)
      break

      case 3:
      res = x * y
      console.log("\nResult is :" + res)
      break

      case 4:
      res = x / y
      console.log("\nResult is :" + res)
      break

      case 5:
      res = x % y;
      console.log("\nResult is :" + res)
      break

      default:
      console.log("Invalid Choice:" + ch)
    }

// Q3. You need to write a function findTax() that takes a number type variable as an argument which is the salary of a person. 
// You need to calculate the tax amount on his salary by using the Js switch control flow. The tax rates are given below.

// if 500000 >= salary > 0 then 0% tax on the entire salary.
// If 1000000 >= salary > 500000 then 10% tax on the entire salary.
// If 1500000 >= salary > 1000000 then 20% tax on the entire salary.
// If the salary > 1500000 then 30% tax on the entire salary.

function findTax(salary) {
    if (salary < 0) {
      throw new Error("Salary cannot be negative");
    }
  
    let taxRate = 0;
    switch (true) {
      case salary <= 500000:
        taxRate = 0;
        break;
      case salary <= 1000000:
        taxRate = 0.1;
        break;
      case salary <= 1500000:
        taxRate = 0.2;
        break;
      default:
        taxRate = 0.3;
    }
  
    return salary * taxRate;
  }
  
  // Take salary input from user
  const userInput = prompt("Enter your salary: ");
  const salary = parseFloat(userInput);
  
  if (isNaN(salary)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    const taxAmount = findTax(salary);
    alert(`Your tax amount is: ${taxAmount}`);
  }

// Q4. Write a function to perform this. You are given two numbers n1 and n2. You need to find the sum of the products of their corresponding digits. So, for a number n1= 6 and n2 = 34, you'll do (6*4)+(0*3) = 24.

function sumOfProducts(n1, n2) {
    let sum = 0;
    while (n1 > 0 || n2 > 0) {
        sum += (n1 % 10) * (n2 % 10);
        n1 = Math.floor(n1 / 10);
        n2 = Math.floor(n2 / 10);
    }
    return sum;
}
