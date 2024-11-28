const email = "22-03804@g.batstate-u.edu.ph";
const copyEmailLink = document.getElementById("copyEmail");

const nextBtnG = document.getElementById('next-btn-g');
const prevBtnG = document.getElementById('prev-btn-g');
const carouselG = document.querySelector('.img__carousel-g');
let imagesG = Array.from(carouselG.querySelectorAll('.item'));
let currentIndexG = 0;

const nextBtnR = document.getElementById('next-btn-r');
const prevBtnR = document.getElementById('prev-btn-r');
const carouselR = document.querySelector('.img__carousel-r');
let imagesR = Array.from(carouselR.querySelectorAll('.item-r'));
let currentIndexR = 0;

document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementById('typing-effect');
    const text = h1.textContent; // Store original text
    h1.textContent = ''; // Clear text content for animation
    
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            h1.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here (100ms per character)
        }
    }

    typeEffect();
});

copyEmailLink.addEventListener("click", (event) => {
    event.preventDefault();

    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    
    tempInput.select();
    tempInput.setSelectionRange(0, 99999);
    
    document.execCommand("copy");
    
    document.body.removeChild(tempInput);
    
    alert("Email copied to clipboard!");
});

document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.about__main-right .about__img');

    img.addEventListener('click', () => {
        img.classList.add('spin'); 
        
        img.addEventListener('animationend', () => {
            img.classList.remove('spin');
        }, { once: true });
    });
});


function updateCarousel(carousel, images, currentIndex) {
    const newImages = images.slice(currentIndex, currentIndex + 3);
    carousel.innerHTML = '';

    newImages.forEach(img => {
        carousel.appendChild(img);
    });

    return currentIndex;
}

function goNext(currentIndex, images, carousel) {
    currentIndex = (currentIndex + 1) % (images.length - 2); 
    return updateCarousel(carousel, images, currentIndex);
}

function goPrev(currentIndex, images, carousel) {
    currentIndex = (currentIndex - 1 + (images.length - 2)) % (images.length - 2);
    return updateCarousel(carousel, images, currentIndex);
}

currentIndexG = updateCarousel(carouselG, imagesG, currentIndexG);
currentIndexR = updateCarousel(carouselR, imagesR, currentIndexR);

nextBtnG.addEventListener('click', () => {
    currentIndexG = goNext(currentIndexG, imagesG, carouselG);
});
prevBtnG.addEventListener('click', () => {
    currentIndexG = goPrev(currentIndexG, imagesG, carouselG);
});

nextBtnR.addEventListener('click', () => {
    currentIndexR = goNext(currentIndexR, imagesR, carouselR);
});
prevBtnR.addEventListener('click', () => {
    currentIndexR = goPrev(currentIndexR, imagesR, carouselR);
});
