document.addEventListener("DOMContentLoaded", function () {
  // Function to add an "Edit" button to each "li" after the delete button
  function addEditButton(li) {
    var editButton = document.createElement("button");
    editButton.className = "edit-btn";
    editButton.textContent = "Edit";

    // Append the edit button to the "li" element
    li.appendChild(editButton);

    // Add a click event listener to the edit button
    editButton.addEventListener("click", function () {
      // You can implement the edit functionality here
      var newFruitName = prompt(
        "Edit the fruit name:",
        li.firstChild.nodeValue.trim()
      );

      // Update the "li" text content with the new fruit name
      if (newFruitName !== null) {
        li.firstChild.nodeValue = newFruitName;
      }
    });
  }

  // Add "Edit" button to existing fruits
  var fruitsList = document.querySelector(".fruits");
  var fruits = document.querySelectorAll(".fruit");

  fruits.forEach(function (fruit) {
    addEditButton(fruit);
  });

  // Form submission logic
  var form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Select the input element
    var fruitToAdd = document.getElementById("fruit-to-add");

    // Create the li
    var newLi = document.createElement("li");
    newLi.className = "fruit";
    newLi.innerHTML =
      fruitToAdd.value + '<button class="delete-btn">x</button>';

    // Add the "Edit" button to the new "li"
    addEditButton(newLi);

    // Adding "li" as the last element of the unordered list
    fruitsList.appendChild(newLi);

    // Clear the input field after adding the fruit
    fruitToAdd.value = "";
  });

  // Delete button click event
  fruitsList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      var fruitToDelete = event.target.parentElement;
      fruitsList.removeChild(fruitToDelete);
    }
  });
});
