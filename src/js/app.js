let input = document.querySelectorAll("input");
let name_txt = document.querySelector(".card__holder");
let card_nb_txt = document.querySelector(".card__number");
let exp_txt = document.querySelector(".card__expiration");
let card = document.querySelector(".card");
console.log(card);

let name = input[0];
let card_nb = input[1];
let exp = input[2];

let name_default = "John Doe";
let nb_default = "42 42 42 42 42";
let exp_default = "10/22";

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
  } else {
    card.className = "card";
  }
  if (card_nb.value[0] === "3") {
    card.className = "card american";
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
