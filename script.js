function calcSI() {
  var p = document.getElementById("p").value;
  var r = document.getElementById("r").value;
  var t = document.getElementById("t").value;
  var si = (p * r * t) / 100;
  document.getElementById("res").innerText = "SI: " + si;
}
