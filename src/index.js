function generateRecipe(event) {
  event.preventDefault();

  let recipeElement = document.querySelector("#recipe");
  recipeElement.innerHTML = "1 onion chopped";
  new Typewriter("#recipe", {
    strings: "1 onion chopped",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#ingredient-entry-form");
recipeFormElement.addEventListener("submit", generateRecipe);
