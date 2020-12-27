const review = document.querySelector('.review');
const author = document.querySelector('.name');
const title = document.querySelector('.title');
const image = document.querySelector('.img');
let slide1 = true;

function switchSlide() {
   if (slide1 = !slide1) {
      review.innerHTML = '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”';
      author.innerHTML = 'Tanya Sinclair';
      title.innerHTML = 'UX Engineer';
      image.src = './images/image-tanya.jpg';
   } else {
      review.innerHTML = '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”';
      author.innerHTML = 'John Tarkpor';
      title.innerHTML = 'Junior Frontend Developer';
      image.src = './images/image-john.jpg';
   }
}

// To use the left and right arrow keys to change slides
document.onkeydown = function (event) {
   var e = event || window.event;
   if (e.keyCode == '37') { //LEFT
      switchSlide(-1);
   } else if (e.keyCode == '39') { //RIGHT
      switchSlide(1);
   }
}
