const carousel = document.querySelector('.carousel');
const images = carousel.querySelectorAll('img');
let angle = 0;
const radius = 150; // Ajusta el radio para cambiar el tamaño del círculo


function rotateCarousel() {
 angle += 45; // Ajusta la velocidad de rotación
 carousel.style.transform = `translateZ(${-radius}px) rotateY(${angle}deg)`;


 images.forEach((img, i) => {
 const imageAngle = angle + (360 / images.length) * i;
 const translateY = 0; // Puedes ajustar esto para una rotación más elíptica
 const translateX = 0;
 img.style.transform = `rotateY(${imageAngle}deg) translateZ(${radius}px) translateY(${translateY}px) translateX(${translateX}px)`;
 });
}


function initCarousel() {
 const numImages = images.length;
 const sliceAngle = 360 / numImages;


 images.forEach((img, i) => {
 const angleRad = (sliceAngle * i) * Math.PI / 180;
 const x = Math.sin(angleRad) * radius;
 const z = Math.cos(angleRad) * radius;
 img.style.transform = `rotateY(${sliceAngle * i}deg) translateZ(${radius}px)`;
 });


 setInterval(rotateCarousel, 2000); // Cambia la imagen cada 2 segundos
}


initCarousel();