var slides = document.querySelectorAll('.slide'); // NodeList <=> tableau
var slide1 = slides[0];
var slide2 = slides[1];
var slide3 = slides[2];
console.log(slides);

var butt_right = document.querySelector('.butt-right');
var butt_left = document.querySelector('.butt-left');
var butt_pause = document.querySelector('.butt-pause');

var index = 0;

// Next slide
function next_slide() {
  slides[index].classList.remove('slide-active'); // 0 - 1 - 2
  if (index == 2) {
    index = -1;
  }
  slides[index+1].classList.add('slide-active');  // 1 - 2 - 0
  index = index +1;
  console.log('slide : ' + index);
}

// Previous slide
function previous_slide() {
  slides[index].classList.remove('slide-active'); // 0 - 2 - 1
  if (index == 0) {
    index = 3;
  }
  slides[index-1].classList.add('slide-active');  // 2 - 1 - 0
  index = index -1;
  console.log('slide : ' + index);
}

// Butt right
butt_right.addEventListener('click', function (){
  next_slide();
});

// Butt left
butt_left.addEventListener('click', function (){
  previous_slide();
});

// Auto Play
var idInterval;
start_autoplay();

function start_autoplay() {
  idInterval = window.setInterval(function () {
    next_slide();
  }, 1000);
}

butt_pause.addEventListener('click', function (){
  if (butt_pause.classList.contains('pausing')) { // en pause -> relance timer
    start_autoplay();
    butt_pause.classList.remove('pausing');
  } else { // pas en pause -> met en pause
    console.log('pause');
    window.clearInterval(idInterval);
    butt_pause.classList.add('pausing');
  }
});