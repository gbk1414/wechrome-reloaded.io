const images = [
  "img1.5a345bfe.jpg",
  "img2.bb260f78.jpg",
  "img3.e34bda8d.jpg",
  "img4.a35ee5e5.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

//bgImage.src = `${chosenImage}`;

//document.body.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
