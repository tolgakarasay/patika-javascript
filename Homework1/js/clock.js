function showUsername() {
  const USERNAME = prompt("İsminizi girin: ");
  var text = document.createTextNode(USERNAME);
  let nameSpan = document.querySelector("#myName");
  nameSpan.appendChild(text);
}

function showTime() {
  const d = new Date();
  const days = [
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    "Pazar",
  ];
  let clockDiv = document.querySelector("#myClock");
  clockDiv.innerHTML = `${d.toLocaleDateString()} ${days[d.getDay() - 1]}`;
}
