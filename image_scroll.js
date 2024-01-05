
let slideIndex = 1;
let autoSlideTimeout;

function plusSlides(n) {
    resetTimer();
    showSlides((slideIndex += n));
}

// Reset the timer after button click and autoplay 
function resetTimer() {
    clearTimeout(autoSlideTimeout);
    autoSlideTimeout = setTimeout(showSlides, 4000);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");

    // The logic of Next and Previous button
    if (n > slides.length || n < slides.length || n == slides.length) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        else if (n < 1) {
            slideIndex = slides.length;
        }
        else if (n == slides.length) {
            slideIndex++;
            slideIndex = slides.length;
        }
    } 
    // The logic of AutoPlay Slide
    else {   
        if (slideIndex < slides.length) {     
            slideIndex++;
        } 
        else if(slideIndex > slides.length){
            slideIndex = 1;
        }  
        else if (slideIndex = slides.length){
            slideIndex = 1;
        }
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    resetTimer();
}

// Start automatic sliding initially
resetTimer();




