let input = document.querySelectorAll("input");
let name_txt = document.querySelector(".card__holder");
let card_nb_txt = document.querySelector(".card__number");
let exp_txt = document.querySelector(".card__expiration");

let name = input[0];
let card_nb = input[1];
let exp = input[2];

name.addEventListener("keyup", function(event) {
  event.preventDefault();
  name_txt.innerHTML =
    "<p> <span>card holder name</span><br />" + name.value + "</p>";
});

card_nb.addEventListener("keyup", function(event) {
  event.preventDefault();
  card_nb_txt.innerHTML =
    "<p> <span>card number</span> <br />" + card_nb.value + "</p>";
});

exp.addEventListener("keyup", function(event) {
  event.preventDefault();
  exp_txt.innerHTML =
    "<p> <span>card number</span> <br />" + exp.value + "</p>";
});
