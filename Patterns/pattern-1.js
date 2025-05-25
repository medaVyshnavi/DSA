function pattern5(n) {
  for (let i = n; i > 0; i--){
    for (let j = i; j > 0; j--){
      console.log("*")
    }
    console.log("\n")
  }
}
console.log(pattern5(5))

/**********************************************************/

function pattern4(n) {
  for (let i = 1; i <= n; i++){
    for (let j = 1; j <= i; j++){
      console.log(i)
    }
    console.log("\n")
  }
}
console.log(pattern4(5))

/**********************************************************/

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    console.log("\n");
  }
}
console.log(pattern3(5));

/**********************************************************/

function pattern2(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}
console.log(pattern2(5));

/**********************************************************/

function pattern1(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log("* ");
    }
    console.log("\n");
  }
}
console.log(pattern1(5));
