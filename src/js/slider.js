function slider ({slide, next, prew}) {
	
  const slides = document.querySelectorAll(slide);
  const prewSlide = document.querySelector(prew);
  const nextSlide = document.querySelector(next);


    let slideIndex = 1;
  
    showSlides(slideIndex);
  
    function showSlides(n) {
      
      if (n > slides.length) {
        slideIndex = 1;
      }
  
      if (n < 1) {
        slideIndex = slides.length;
      }

      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      
      slides[slideIndex - 1].style.display = 'flex';
    }
  
    function nextSlides(n) {
      showSlides(slideIndex += n);
    };

    function prewSlides(n) {
      showSlides(slideIndex -= n);
    };

    nextSlide.addEventListener('click', handleTouchNext);                                            

    function handleTouchNext(evt) {
              nextSlides(1);                                           
    };

    function prewSlides(n) {
      showSlides(slideIndex += n);
    }

    prewSlide.addEventListener('click', handleTouchMove);                                            

    function handleTouchMove(evt) {
                prewSlides(1);                                           
    };

}

export default slider;