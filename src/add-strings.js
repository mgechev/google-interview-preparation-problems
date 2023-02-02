// https://leetcode.com/problems/add-strings/description/

const add = (s, t) => {
  const w = Math.max(s.length, t.length);
  s = s.padStart(w, '0');
  t = t.padStart(w, '0');
  let c = 0;
  let res = '';
  for (let i = s.length - 1; i >= 0; i -= 1) {
    const current = parseInt(s[i], 10) + parseInt(t[i], 10) + c;
    if (i === 0) {
      res = current + res;
    } else {
      const dig = current % 10;
      c = Math.floor(current / 10);
      res = dig + res;
    }
  }
  return res;
};

//9739
//0019

console.log(add('9789', '19'));

// Alternative solution for add-strings problem of leetcode in javascript
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  // declare sum variable and assign empty string ("") to it
 let sum = "";
  // check condition if num1 >= num2 then call function findSum else change Arguments of findSum
 if(num1.length >= num2.length) findSum(num1, num2)
 else findSum(num2, num1)

 function findSum(first, second){
   // declare carry variable and assign 0 to it.
   let carry = 0;
   // delcare diff variable for accessing last charater of second params
   let diff = second.length - first.length;
   // run for loop from last character to first character
   for(let i = first.length - 1; i>=0; i--){
     // declare temp variable to find sum of last character of first params and second params and add carry
     let temp = Number(first.charAt(i)) + Number(second.charAt(i + diff)) + carry;
     // check condition if temp > 9
     if(temp > 9){
       sum = (temp % 10) + sum; //  add reminder of temp and sum and assign it to sum
       carry = Math.floor(temp/10); // rounds a number DOWN to the nearest integer of temp and assign it to carry
     }else{ // if temp < 9
       sum = temp + sum; // add temp and sum and assign it to sum
       carry = 0; // set carry to 0 because there is no carry
     }
        
   }
   // after finishing the for the loop if there is carry then add carry and sum and assign it to sum
   if(carry) sum = carry + sum;
 }
  // return sum as string
 return sum;
};

console.log(addStrings("1131232432523523523552359898", "123")); // 1131232432523523523552360021
