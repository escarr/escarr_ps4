const addIngred = document.getElementById("addIngredient");

addIngred.addEventListener("click", () => {
    // add ingredient to list
    const ingredientsList = document.getElementById("ingredients_list");
    const newIngredient = document.createElement("li");
    const ingredientName = document.getElementById("iname").value;
    const ingredientAmount = document.getElementById("iamount").value;
    const ingredientUnit = document.getElementById("iunit").value;
    newIngredient.textContent = ingredientName + ': ' + ingredientAmount + ' ' + ingredientUnit
    ingredientsList.append(newIngredient);
    // clear inputs
    document.getElementById("iname").value = "";
    document.getElementById("iamount").value = "";
    document.getElementById("iunit").value = "";

});


const addInstruc = document.getElementById("addInstruction");

addInstruc.addEventListener("click", () => { 
  // add instruction to list
  const ingredientsList = document.getElementById("instructions_list");
  const newInstruction = document.createElement("li");
  const InstructionText = document.getElementById("instruction").value;
  newInstruction.textContent = InstructionText;
  ingredientsList.append(newInstruction);
  // clear input
  document.getElementById("instruction").value = "";
});


const generateRecipe = document.getElementById("generateRecipe");
// pop up message when recipe is complete
generateRecipe.addEventListener("click", () => {
    alert('Congrats! You have created a new recipe! Planning on adding more functionality here in future assignments :)')
});

const buttons = [addIngred, addInstruc, generateRecipe]

buttons.forEach(function (button) {
    button.addEventListener("mouseover", () => {
        // highlight the button upon hover
        button.setAttribute("class", "highlight");
    });

    button.addEventListener("mouseout", () => {
        // un-highlight the button upon hover
        button.setAttribute("class", "");
    });

})

