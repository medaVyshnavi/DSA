function reverseArrayTwoPointer(arr) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
    i++;
    j--;
  }
  return arr
}
console.log(reverseArrayTwoPointer[3,4,5,6,7,8])

/**********************************************************/

function reverseArray(arr) {
  arrReverse = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    arrReverse.push(arr[i]);
  }
  return arrReverse;
}
console.log(reverseArray([10, 20, 30, 40, 50]));

/**********************************************************/

function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}
console.log(fact(5));
/**********************************************************/

function NumberSum(n, i, sum) {
  if (i > n) return sum;
  sum = sum + i;
  return NumberSum(n, i + 1, sum);
}
console.log(NumberSum(5, 1, 0));

/**********************************************************/

function printNumbers(num, i) {
  if (i <= num) {
    console.log(i);
    printNumbers(num, i + 1);
  }
}
printNumbers(3, 1);
