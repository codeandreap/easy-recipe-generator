function showRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "tbo7620f2867660145cf2bae403e471b";
  let context =
    "You are a top chef. You provide easy-to-make recipes based on a single ingredient. These recipes should have no more than 10 ingredients. These ingredients should be a staple in anyone's kitchen. These recipes should take no longer than 30-45 minutes to make. Provide this recipe in a standard recipe format using basic HTML. Make sure to follow user instructions.";
  let prompt = `User instructions are: Generate a recipe that incorporates ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(showRecipe);

  //let recipeElement = document.querySelector("#recipe");
  //recipeElement.innerHTML = "1 onion chopped";
}

let recipeFormElement = document.querySelector("#ingredient-entry-form");
recipeFormElement.addEventListener("submit", generateRecipe);
