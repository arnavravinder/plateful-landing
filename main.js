AOS.init();

document.querySelectorAll('.text-box-effect').forEach(element => {
    element.classList.add('expand');
  
    element.addEventListener('animationend', event => {
      if (event.animationName === 'expand') {
        if (element.classList.contains('text-box-right')) {
            element.style.right = 'auto';
            element.style.left = '0';
        } else if (element.classList.contains('text-box-left')) {
            element.style.left = 'auto';
            element.style.right = '0';
        }

        element.classList.remove('expand');
        element.classList.add('contract');
        
      } else if (event.animationName === 'contract') {
        element.classList.remove('contract');
        element.style.display = 'none';
      }
    });
});

document.querySelectorAll('.box-trailer').forEach(element => {
    element.classList.add('expand-trailer');
  
    element.addEventListener('animationend', event => {
      document.querySelectorAll('.align-span')[0].style.opacity = '1';
      document.querySelectorAll('.align-span')[1].style.opacity = '1';
      if (event.animationName === 'expand-trailer') {
        if (element.classList.contains('text-box-right')) {
            element.style.right = 'auto';
            element.style.left = '0';
        } else if (element.classList.contains('text-box-left')) {
            element.style.left = 'auto';
            element.style.right = '0';
        }

        element.classList.remove('expand-trailer');
        element.classList.add('contract-trailer');
        
      } else if (event.animationName === 'contract-trailer') {
        element.classList.remove('contract-trailer');
        element.style.display = 'none';
      }
    });
});

setTimeout(() => {
    document.querySelector('.explanation-container').style.width = '100%';
}, 1000);


setTimeout(() => {
    document.querySelector('.down-btn').style.opacity ='1';
}, 3000)

const positions = [['97.5%', '100%'], ['97.5%', '5%'], ['0%', '0%'], ['-1%', '96%']]

let prevScroll = 0;
let scrollCounter = 0;
const scrollIncrement = 5;
const scrollContainer = document.querySelector('.scroll-image-container');
let scrollEnabled = false;
let threshold = window.innerHeight * 1.65

window.addEventListener('scroll', () => {
    if (window.scrollY >= threshold - 75 && window.scrollY <= threshold + 75) {
        if (!scrollEnabled) {
            scrollEnabled = true;
        }
    } else {
        scrollEnabled = false;
    }
});

window.addEventListener('wheel', (event) => {
    if (scrollEnabled) {
        event.preventDefault();

        prevScroll = scrollCounter;
        if (event.deltaY > 0) {
            scrollCounter++;
        } else if (event.deltaY < 0 && scrollCounter > 0) {
            scrollCounter--;
        }

        if (scrollCounter >= scrollIncrement * 5 || (scrollCounter - prevScroll < 0 && scrollCounter <= scrollIncrement)) {
            scrollContainer.style.height = '130%';
            scrollContainer.style.left = '50%';
            scrollContainer.style.top = '100%';
            scrollCounter = 0;
            scrollEnabled = false;
        } else if (scrollCounter >= scrollIncrement * 4) {
            scrollContainer.style.top = positions[3][1];
            scrollContainer.style.left = positions[3][0];
        } else if (scrollCounter >= scrollIncrement * 3) {
            scrollContainer.style.top = positions[2][1];
            scrollContainer.style.left = positions[2][0];
        } else if (scrollCounter >= scrollIncrement * 2) {
            scrollContainer.style.top = positions[1][1];
            scrollContainer.style.left = positions[1][0];
        } else if (scrollCounter >= scrollIncrement) {
            scrollContainer.style.height = '160%';
            scrollContainer.style.top = positions[0][1];
            scrollContainer.style.left = positions[0][0];        
        }
    }
}, { passive: false });

const navbar = document.querySelector('nav');
const scrollThreshold = window.innerHeight;

window.addEventListener('scroll', () => {
  if (window.scrollY >= scrollThreshold - 20) {
    navbar.classList.add('bg-dark');
    document.querySelector('.down-btn').style.display = 'none';
  } else {
    navbar.classList.remove('bg-dark');
  }
})