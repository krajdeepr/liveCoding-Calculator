function dis(val) {
  document.getElementById("display").value += val;
}

function solve() {
  let x = document.getElementById("display").value;
  let y = eval(x);
  document.getElementById("display").value = y;
}
function keyBoard() {
  document.getElementById("display").style.backgroundColor = "#ebb9b9";
}

function clr() {
  document.getElementById("display").value = "";
}
