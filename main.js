function endsLy(str) {
  return str.endsWith("ly");
}

function nTwice(str, n) {
  return str.substring(0, n) + str.substring(str.length - n);
}

document.getElementById("checkEndsLy").onclick = function () {
  const input = document.getElementById("endsLyInput").value;
  const result = endsLy(input);
  document.getElementById("endsLyResult").textContent = result ? "True" : "False";
};
