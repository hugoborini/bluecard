let input = document.querySelectorAll("input");
let name_txt = document.querySelector(".card__holder");
let card_nb_txt = document.querySelector(".card__number");
let exp_txt = document.querySelector(".card__expiration");
let card = document.querySelector(".card");
let img = document.querySelector(".card__logo img");
let button = document.querySelector(".form__button--modif");
console.log(button);

let name = input[0];
let card_nb = input[1];
let exp = input[2];

let name_default = "John Doe";
let nb_default = "42 42 42 42 42";
let exp_default = "10/22";

button.addEventListener("click", function() {
  alert("merci de votre commande");
});

name.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (name.value.length === 0) {
    name_txt.innerHTML =
      "<p> <span>card holder name</span><br />" + name_default + "</p>";
  } else {
    name_txt.innerHTML =
      "<p> <span>card holder name</span><br />" + name.value + "</p>";
  }
});

card_nb.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (card_nb.value.length === 0) {
    card_nb_txt.innerHTML =
      "<p> <span>card number</span> <br />" + nb_default + "</p>";
  } else {
    card_nb_txt.innerHTML =
      "<p> <span>card number</span> <br />" + card_nb.value + "</p>";
  }
  if (card_nb.value[0] === "4") {
    card.className = "card visa";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg"
    );
  } else {
    card.className = "card";
  }
  if (card_nb.value[0] === "3") {
    card.className = "card american";
    img.setAttribute(
      "src",
      "https://img.bfmtv.com/c/1000/600/ed6/e5461d945078f6122e36e9a73208c.png"
    );
    img.setAttribute("alt", "logo_american");
  }
  if (card_nb.value[0] === "5") {
    card.className = "card master";
    img.setAttribute(
      "src",
      "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"
    );
    img.setAttribute("alt", "logo_master");
  }
  if (card_nb.value.length === 0) {
    img.setAttribute(
      "src",
      "https://www.humanprogresscenter.com/wp-content/uploads/2016/05/fond-gris.jpg"
    );
  }
});

exp.addEventListener("keyup", function(event) {
  event.preventDefault();
  if (exp.value.length === 0) {
    exp_txt.innerHTML =
      "<p> <span>card number</span> <br />" + exp_default + "</p>";
  } else {
    exp_txt.innerHTML =
      "<p> <span>card number</span> <br />" + exp.value + "</p>";
  }
});
