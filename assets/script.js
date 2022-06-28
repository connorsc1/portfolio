function darkMode() {
	var element = document.body;
	element.className = "dark-mode";
  document.getElementById("1").className = "dark";
  document.getElementById("2").className = "dark";
  document.getElementById("3").className = "dark";
}

function lightMode() {
	var element = document.body;
	element.className = "light-mode";
  document.getElementById("1").className = "light";
  document.getElementById("2").className = "light";
  document.getElementById("3").className = "light";
}

function change(checkboxElem) {
  if (checkboxElem.checked) {
    darkMode();
  } else {
    lightMode();
  }
}