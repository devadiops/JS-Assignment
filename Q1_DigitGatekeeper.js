function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function digitSum(x) {
  let sum = 0;
  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }
  return sum;
}

let L = parseInt(prompt("Enter L:"));
let R = parseInt(prompt("Enter R:"));
let K = parseInt(prompt("Enter K:"));

let count = 0;

for (let x = L; x <= R; x++) {
  if (x % K !== 0) continue;
  if (String(x).includes("0")) continue;

  let sum = digitSum(x);
  if (isPrime(sum)) count++;
}

alert(count);
