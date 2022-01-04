let a, b;

function calcul(a, b) {
  a = parseInt(document.querySelector("#n1").value);
  b = parseInt(document.querySelector("#n2").value);
  result = a * b;

  document.querySelector("#result").value = result;
}

document.querySelector("#form").addEventListener("submit", function (event) {
  event.preventDefault();
  calcul(a, b);
});
