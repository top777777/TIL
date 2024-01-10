const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages = `img/${chosenImages}`;

document.body.appendChild(bgImages);
