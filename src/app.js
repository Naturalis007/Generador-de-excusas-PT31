/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let resultado1 = who[Math.floor(Math.random() * who.length)];
  let resultado2 = action[Math.floor(Math.random() * action.length)];
  let resultado3 = what[Math.floor(Math.random() * what.length)];
  let resultado4 = when[Math.floor(Math.random() * when.length)];

  console.log(
    resultado1 + " " + resultado2 + " " + resultado3 + " " + resultado4
  );

  document.getElementById("excuse").innerHTML = "pablito clavo un clavito";
};
