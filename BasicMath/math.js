// brute force
function findGCD(n1, n2) {
  let gcd = 1;
  let i = 2
  let smallest = Math.min(n1,n2)

  while (i < smallest) {
    if (n1 % i == 0 && n2 % i == 0) {
      gcd = i;
    }
    i++
  }
  return gcd
}
console.log(findGCD(12,9))

// optimal soln                 
function findGcd(a, b) {
  while (a > 0 && b > 0) {
    if (a > b) {
      a = a % b;
    }
    else {
      b = b %a;
    }
  }
  return a === 0 ? b : a;
}                                           

function reverseNum(num) {
  let str = ""
  let i = 0;
  while (i < num.toString().length) {
    let n = num % 10;
    str = str + n;
    num = num / 10
    i++
  }
  return parseInt(str)
}
console.log(reverseNum(2345))

function isArmStrong(num) {
  let org = num
  let digits = Math.floor(Math.log10(num) + 1);
  let sum = 0;

  while (num > 0) {
    let n = num % 10;
    sum = sum + Math.pow(n, digits);
    num = Math.floor(num/10)
  }

  return org === sum
}

console.log(isArmStrong(153))