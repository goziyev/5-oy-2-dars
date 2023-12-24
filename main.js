export function primeNumber(son) {
  let count = 0;
  for (let i = 1; i <= son; i++) {
    if (son % i == 0) {
      count++;
    }
  }
  if (count <= 2) {
      return true
  }else{
      return false
  }
}

export function oddNumber (son){
    let sum = 0;
    let a = 0
    while(1 <= son){
        a = son % 10
        if (a % 2 == 1) {
            sum += a
        }
        son = Math.trunc(son / 10)
    }
    return sum
}