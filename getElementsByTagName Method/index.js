// Change the color of the 5th li tag (Mango) to blue
var mangoLi = document.getElementsByTagName("li")[4]; // Note: Array index is 0-based
mangoLi.style.color = "blue";

// Make all li tags italic
var allLiTags = document.getElementsByTagName("li");
for (var i = 0; i < allLiTags.length; i++) {
  allLiTags[i].style.fontStyle = "italic";
}