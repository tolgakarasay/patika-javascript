function showUsername() {
  const USERNAME = prompt("İsminizi girin: ");
  let text = document.createTextNode(USERNAME);
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

  let text = document.createTextNode(
    `${d.toLocaleDateString()} ${days[d.getDay() - 1]}`
  );

  let clockDiv = document.querySelector("#myClock");
  clockDiv.appendChild(text);
}
