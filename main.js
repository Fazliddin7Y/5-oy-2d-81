function theEnd(str, front) {
  return front ? str[0] : str[str.length - 1];
}

function withoutEnd2(str) {
  return str.length <= 2 ? "" : str.slice(1, -1);
}

function middleTwo(str) {
  const mid = str.length / 2;
  return str.slice(mid - 1, mid + 1);
}

function endsLy(str) {
  return str.endsWith("ly");
}

function nTwice(str, n) {
  return str.substring(0, n) + str.substring(str.length - n);
}

function executeFunction() {
  const str = document.getElementById("inputString").value;
  const functionName = document.getElementById("functionSelect").value;
  const front = document.getElementById("frontCheck").checked;
  const nValue = parseInt(document.getElementById("nValue").value, 10);
  let result = "";

  if (functionName === "theEnd") {
      result = theEnd(str, front);
  } else if (functionName === "withoutEnd2") {
      result = withoutEnd2(str);
  } else if (functionName === "middleTwo") {
      result = middleTwo(str);
  } else if (functionName === "endsLy") {
      result = endsLy(str) ? "Yes" : "No";
  } else if (functionName === "nTwice") {
      result = nTwice(str, nValue);
  }

  document.getElementById("result").textContent = `Result: ${result}`;
}
