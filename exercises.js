// Question 1
const isRealPalindrome = (str) => {
  const newStr = str.toLowerCase().replace(/[^A-Z09]/gi, "");
  return newStr === newStr.split("").reverse().join("");
};

// Question 2
const runningTotal = (arr) => {
  let sum = 0;
  return arr.map(ele => sum += ele);
};

// Question 3
const swap = (str) => {
  return str.split(" ").map(ele => ele.length > 1 ? ele[ele.length - 1] + ele.slice(1, ele.length - 1) + ele[0] : ele).join(" ");
};

// Question 4
const wordSizes = (str) => {
  const obj = {};
  str.split(" ").forEach(element => obj[element.length] ? obj[element.length]++ : obj[element.length] = 1);
  return obj
};

// Question 5
const union = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};

// Question 6
const firstRecurring = (str) => {
  return str.split("").find((ele, index) => str.lastIndexOf(ele) !== index) || "";
};

// Question 7
const showMultiplicativeAverage = (arr) => {
  return (arr.reduce((a, b) => a * b) / arr.length).toFixed(3);
};

// Quetsion 8
const multiplyList = (arr1, arr2) => {
  return arr1.map((ele, index) => ele * arr2[index])
};

// Question 9
const sequence = (int) => {
  const arr = [];
  for(let i = 1; i <= int; i++) {
    arr.push(i);
  }
  return arr;
};

// The below code connects this JS file to our test file
module.exports = {
  isRealPalindrome,
  runningTotal,
  swap,
  wordSizes,
  union,
  firstRecurring,
  showMultiplicativeAverage,
  multiplyList,
  sequence,
};
