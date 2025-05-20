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