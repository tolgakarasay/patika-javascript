function addCloseButton(item) {
  let span = document.createElement("span");
  span.innerHTML = "\u00D7";
  span.className = "close";
  item.append(span);
  span.onclick = function () {
    this.parentNode.style.display = "none";
  };
}

let nodeList = document.querySelectorAll("li");
nodeList.forEach((item) => {
  addCloseButton(item);
});

function addToggle(item) {
  item.addEventListener("click", function () {
    this.classList.toggle("checked");
  });
}

nodeList.forEach((item) => addToggle(item));

let ulDOM = document.querySelector("#list");

function newElement() {
  let liDOM = document.createElement("li");
  let inputDOM = document.querySelector("#task");
  let textNode = document.createTextNode(inputDOM.value);
  liDOM.append(textNode);

  if (inputDOM.value === "" || inputDOM.value.replace(/\s/g, "").length == 0) {
    $(".error").toast("show");
  } else {
    $(".success").toast("show");
    ulDOM.append(liDOM);
    addCloseButton(liDOM);
    addToggle(liDOM);
  }

  inputDOM.value = "";
}
