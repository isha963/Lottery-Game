function genticket(n) {
  let i = 0;
  let a = new Array(n);
  while (i < n) {
    a[i] = Math.floor(Math.random() * 10);
    i++;
    
  }
  return a;
}

function sum(a) {
  return a.reduce((s, value) => s + value, 0);
  
}
export { genticket , sum};