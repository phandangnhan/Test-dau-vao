var a = parseInt(prompt("Nhập số  a"));
var b = parseInt(prompt("Nhập số  b"));
function find_square_number(n){
  let flag = 0;
  let i = 0;
  while(i <= n){
      if( Math.pow( i, 2) == n ) {   
          flag = 1;
          break;
      }
      i++;
  }
  return flag;
}
if (a < b && a !== 0 && b !== 0){
  const ValueA = document.createElement("p");
  ValueA.innerText = "số  a: " + a;
  document.body.appendChild(ValueA);
  const ValueB = document.createElement("p");
  ValueB.innerText = "số  b: " + b;
  document.body.appendChild(ValueB);
  for (let i = a; i < b; i++){
    let check = find_square_number(i)
    if (check === 1) 
      document.writeln(i)
    }
}