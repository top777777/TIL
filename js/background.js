const images = ["01.jpg", "02.jpg", "03.jpg"];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgImages = document.createElement("img");

bgImages.src = `img/${chosenImages}`;

document.body.appendChild(bgImages);
