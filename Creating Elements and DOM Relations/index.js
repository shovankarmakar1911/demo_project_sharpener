
//following sharpener tutorial-------------------


// Create a sub-heading (h3) element
const subHeading = document.createElement("h3");
const headingtext = document.createTextNode("Buy high quality organic fruits online");
subHeading.appendChild(headingtext);
subHeading.style.fontStyle = "italic";

// Append the sub-heading to the header div
const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
const secondDiv = divs[1];
firstDiv.appendChild(subHeading );

// Create a paragraph (p) element for total fruits
const totalFruitsParagraph = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
totalFruitsParagraph.appendChild(paraText);
const fruits = document.querySelector(".fruits");

// Insert the paragraph before the unordered list
secondDiv.insertBefore(totalFruitsParagraph,fruits);

// On this paragraph tag set an id of "fruits-total"
totalFruitsParagraph.id = "fruits-total";



// ChatGPT Response ---------

// // Create a sub-heading (h3) element
// const subHeading = document.createElement("h3");
// subHeading.textContent = "Buy high quality organic fruits online";
// subHeading.style.fontStyle = "italic";

// // Append the sub-heading to the header div
// document.getElementById("header").appendChild(subHeading);

// // Create a paragraph (p) element for total fruits
// const totalFruitsParagraph = document.createElement("p");
// totalFruitsParagraph.textContent = "Total fruits: 4";
// totalFruitsParagraph.id = "fruits-total";

// // Insert the paragraph before the unordered list
// document.querySelector(".fruits").parentNode.insertBefore(totalFruitsParagraph, document.querySelector(".fruits"));
