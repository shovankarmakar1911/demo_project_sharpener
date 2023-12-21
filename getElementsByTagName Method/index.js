// Change the color of the 5th li tag (Mango) to blue
var ListItems = document.getElementsByTagName("li");
ListItems[4].style.color = "blue";

// Make all li tags italic
for (var i = 0; i < ListItems.length; i++) {
  ListItems[i].style.fontStyle = "italic";
}