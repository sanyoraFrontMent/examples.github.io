$(function () {

  $('.clients').slick({
    dots:true,
    appendDots: $('.dots'),
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2
  })

  $('.reviews').slick({
  dots: true,
  appendDots: $('.dotz'),
  arrows: false,
  infinite: true,
  speed: 800,
  fade: true,
  cssEase: 'linear'
  })

  $('.btn-next').on('click', function() {
  $('.slider--container').slick('slickNext');
  });

  $('.btn-prev').on('click', function() {
  $('.slider--container').slick('slickPrev');
  });



})

/*
dots: true,
arrows: true,
appendArrows: $('.btns'),
prevArrow: '<div class="btn-prev"><img src="img/back.svg" alt="BACK"></div>',
nextArrow: '<div class="btn-next"><img src="img/next.svg" alt="NEXT"></div>'
*/

/*
const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

const activeSlide = n => {
  console.log(n);
  for(slide of slides) {
    slide.classList.remove('active');
  }
  slides[n].classList.add('active');
}

const activeDot = n => {
  console.log(n);
  for(dot of dots) {
    dot.classList.remove('active');
  }
  dots[n].classList.add('active');
}

const prepareCurrentSlide = index => {
  activeSlide(index);
  activeDot(index);
}

const nextSlide = () => {
  if (index == slides.length - 1) {
    index = 0;
    prepareCurrentSlide(index);
  } else {
    index++;
    prepareCurrentSlide(index);
  }
}

const prevSlide = () => {
  if (index == 0) {
    index = slides.length - 1;
    prepareCurrentSlide(index);
  } else {
    index--;
    prepareCurrentSlide(index);
  }
}

dots.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    index = indexDot;
    prepareCurrentSlide(index);
  })
});


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 3000);
*/
