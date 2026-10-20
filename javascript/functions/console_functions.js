function logHelloWorld() {
  console.log("Ahoj Světe!");
}
function logText(textParameter) {
  console.log("předaný parametr: " +        textParameter);
}

logHelloWorld();
logHelloWorld();
logHelloWorld();
logText("Programujeme v JavaScriptu");
logText(); // undefined


