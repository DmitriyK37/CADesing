function slider ({slide}) {
	
  const slides = document.querySelectorAll(slide);

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
  
    function nextSlide(n) {
      showSlides(slideIndex += n);
    }

    document.addEventListener('click', handleTouchMove);                                            

    function handleTouchMove(evt) {
              nextSlide(1);                                           
    };

}

export default slider;