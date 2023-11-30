var userName = prompt("Hello, Who are you?");
var car = [
  {
    name: "Bmw",
    image: "./images/BMW.jpg",
  },
  {
    name: "Saab",
    image: "./images/Saab.jpg",
  },
  {
    name: "Maserati",
    image: "./images/Maserati.jpg",
  },
];
var randomNumber = Math.floor(Math.random() * car.length);
if (userName === "Saif" || userName === "Chris") {
  document.write(
    "<h1>Hello " +
      userName +
      " you won a " +
      " " +
      car[randomNumber].name +
      "</h1>"
  );
  var imageElement = document.createElement("img");
  imageElement.src = car[randomNumber].image;
  document.body.appendChild(imageElement);
} else {
  document.write("<h1>Sorry you won nothing!!😢</h1>");
}
