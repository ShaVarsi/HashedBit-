// Ques 1.  Create an array of states in india. 
//Remove all the names starting with vowels from the list. 
//Use array.filter.

const statesInIndia = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jammu and Kashmir",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const filteredStates = [];

for (let i = 0; i < statesInIndia.length; i++) {
  if (statesInIndia[i][0] !== "A" && statesInIndia[i][0] !== "E" && statesInIndia[i][0] !== "I" && statesInIndia[i][0] !== "O" && statesInIndia[i][0] !== "U") {
    filteredStates.push(statesInIndia[i]);
  }
}

console.log("FilteredStates - ",filteredStates );



// Q2.  let str = 'I love my India' 
//output expected = 'India my love I' 
//Write code for this.

const str = "I love my India";
const words = str.split(" ");
const reversedWords = words.reverse();
const reversedStr = reversedWords.join(" ");
const finalStr = `India ${reversedStr.slice(5)}`;
console.log(finalStr);



// Q3. let string = 'INDIA'
//output = 'INDONESIA'
//Use array.splice


let string = 'INDIA';

// Check if the string contains 'INDIA'
if (string.includes('INDIA')) {
  const index = string.indexOf('INDIA');

  // Create a new string with 'INDIA' replaced by 'INDONESIA'
  const newString = [string.slice(0, index), 'INDONESIA', string.slice(index + 5)].join('');
  console.log(newString); 
}


// Q4. Take any string with minimum 20 characters. Count number of consonant and vowel in the string.

function countConsonantsAndVowels(str) {
    if (str.length < 20) {
      throw new Error('The string must have a minimum length of 20 characters');
    }
  
    let vowels = 0;
    let consonants = 0;
  
    for (let i = 0; i < str.length; i++) {
      const char = str[i].toLowerCase();
  
      if (char.match(/[aeiou]/)) {
        vowels++;
      } else if (char.match(/[bcdfghjklmnpqrstvwxyz]/)) {
        consonants++;
      }
    }
  
    console.log(`Number of vowels: ${vowels}`);
    console.log(`Number of consonants: ${consonants}`);
  }
  
  const str1 = 'This is a sample string with more than twenty characters for testing the consonant and vowel count function.';
  countConsonantsAndVowels(str1);


// Q5. Write a function to replace wrong word with correct word in any sentance.
//Like this - correctfn(string, wrong, correct)
//Use string.replace in function.

function correctFn(str, wrong, correct) {
    const regex = new RegExp('\\b' + wrong + '\\b', 'g');
    const newStr = str.replace(regex, correct);
    return newStr;
  }
  
  const str2 = 'The quick brown foks jumps over the lazy dog.';
  const wrong = 'foks';
  const correct = 'fox';
  
  const newStr = correctFn(str2, wrong, correct);
  console.log(newStr); // Output: 'The quick brown fox jumps over the lazy dog.'


// Q6. inputArr = [1,2,3,9,10,7,5,4,3]
//answer = [9, 10, 7]
//User array.filter and return numbers greater than 5.

const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
const answer = inputArr.filter(num => num > 5);
console.log(answer); // Output: [9, 10, 7]


// Q7. const students = [
//{ name: "Ram", scores: [80, 70, 60] },
//{ name: "Mohan", scores: [80, 70, 90] },
//{ name: "Sai", scores: [60, 70, 80] },
//{ name: "Hemang", scores: [90, 90, 80, 80] },
//];
//Output = [
//{ name: "Ram", average: 70 },
//{ name: "Mohan", average: 80 },
// { name: "Sai", average: 70 },
// { name: "Hemang", average: 85 },
// ];
// Use array.map and array.reduce.

const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
  ];
  
  const output = students.map(student => {
    const avg = student.scores.reduce((acc, score) => acc + score, 0) / student.scores.length;
    return { name: student.name, average: avg };
  });
  
  console.log(output);
 

//  Q8. Write a function to find repeated sum of digits until there is only a single digit in the number.
// Example - 456 - 4+5+6 = 15 - 1+5 = 6.

function sumOfDigits(num) {
    while (num > 9) {
      const strNum = String(num);
      num = Array.from(strNum).reduce((acc, digit) => acc + parseInt(digit), 0);
    }
    return num;
  }
  
  console.log(sumOfDigits(456)); 

//   Q9. Write a function to count the number of words in a paragraph.

function countWords(paragraph) {
    // Split the paragraph into an array of words
    const words = paragraph.split(' ');
    const filteredWords = words.filter(word => word !== '');
    return filteredWords.length;
  }

const paragraph = "Hello Freecodecamp student's , free , freecodecamp , free learning";
const wordCount = countWords(paragraph);
console.log(wordCount);



// Q10. Write a function to reverse a string.
// Input - Hello
// Outpur - olleH

function reverseString(str) {
    const chars = str.split('');
  
    // Reverse the array of characters
    const reversedChars = chars.reverse();
    const reversedStr = reversedChars.join('');
    return reversedStr;
  }
  
  console.log(reverseString('Hello')); 


//   Q11)
// Input

// [
//     student1: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student2: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     },
//     student3: {
//         subject1: 44,
//         subject2: 56,
//         subject3: 87,
//         subject4: 97,
//         subject5: 37
//     }
// ]
    
// Output: -
// [
//     student1: {
//         average: 44
//     },
//     student2: {
//         average: 44
//     },
//     student3: {
//         average: 44
//     }
// ]
// Write code to find average as mentioned above. Use array and object methods.

const studentMarks = {
  student1: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student2: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
  student3: {
    subject1: 44,
    subject2: 56,
    subject3: 87,
    subject4: 97,
    subject5: 37,
  },
};

const calculateAverages = (students) => {
  const averages = {};

  for (const student in students) {
    const marks = Object.values(students[student]);
    const sum = marks.reduce((acc, val) => acc + val, 0);
    const avg = sum / marks.length;

    averages[student] = { average: avg };
  }

  return averages;
};

const result = calculateAverages(studentMarks);
console.log(result);