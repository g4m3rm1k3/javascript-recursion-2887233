// function power(base, exponent) {
//   let result = 1;
//   for (let i = 1; i <= exponent; i++) {
//     result *= base;
//   }
//   return result;
// }

function factorial(position) {
  let answer = 1;
  for (let num = position; num > 0; num--) {
    answer *= num;
  }
  return answer;
}
