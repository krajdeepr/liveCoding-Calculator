function dis(val) {
  document.getElementById("display").value += val;
}

function solve() {
  try {
    let x = document.getElementById("display").value;
    let y = eval(x);
    document.getElementById("display").value = y;
  } catch (error) {
    document.getElementById("display").value = "invalid expression";
  }
}
function keyBoard(evt) {
  var iKeyCode = evt.which ? evt.which : evt.keyCode;
  if (iKeyCode != 46 && iKeyCode > 31 && (iKeyCode < 48 || iKeyCode > 57))
    return false;

  return true;
}

function clr() {
  document.getElementById("display").value = "";
}
