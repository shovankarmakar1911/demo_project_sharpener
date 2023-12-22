//  Align the main heading 'Fruit Shop' to the right side
let mainHeading = document.querySelector("#main-heading");
mainHeading.style.textAlign = "right";

//  Use id as a query to select 'Fruits In Basket' and set its color to brown
let basketHeading = document.querySelector("h2");
basketHeading.style.marginLeft = "30px";
basketHeading.style.color = "brown";

let fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "grey";

fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";
fruits.style.borderRadius = "5px";
fruits.style.listStyleType = "none";

let fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.backgroundColor = "white";
  fruitItems[i].style.padding = "30px";
  fruitItems[i].style.margin = "10px";
  fruitItems[i].style.borderRadius = "5px";
}

// Change the background color of even fruit items to brown and change their text color to white
let evenFruitItems = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruitItems.length; i++) {
  evenFruitItems[i].style.backgroundColor = "brown";
  evenFruitItems[i].style.color = "white";
}

// Change the background color of even fruit items to lightgrey and change their text color to black
let oddFruitItems = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < evenFruitItems.length; i++) {
  oddFruitItems[i].style.backgroundColor = "lightgrey";
  oddFruitItems[i].style.color = "black";
}
