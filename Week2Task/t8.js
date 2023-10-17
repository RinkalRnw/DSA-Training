//Question 8: Find Maximum Sum of Contiguous Subarray
let arr = [2, -3, -4, 1, -2, 5 ,9];

let max = arr[0];
let cr_max = 0;

for (let i = 0; i < arr.length; i++) {
  cr_max += arr[i];
  max = Math.max(cr_max, max);
  if (cr_max < 0) {
    cr_max = 0;
  }
}

console.log("max", max);