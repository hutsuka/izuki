
document.addEventListener('DOMContentLoaded', function() {



const lenis = new Lenis({
   duration: 1.2,
    smoothWheel: true,
    wheelMultiplier: 0.4,
    smooth: true,
});
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);


const main = document.querySelector("main");
const header = document.querySelector("header");
const loading = document.getElementById("loading");

setTimeout(function () {

    loading.style.opacity = "0";
    setTimeout(function () {
        loading.style.display = "none";
        main.classList.add("loaded");
        header.classList.add("loaded");

    }, 1000);
}, 3000);





const images = document.querySelectorAll('.production__image-set img');
const texts = document.querySelectorAll('.production__images-item');
let currentSelected = document.querySelector('.production__image-set');

function updateSelection(newSelection) {
    if (currentSelected) {
        currentSelected.classList.remove('selected');
    }
    currentSelected = newSelection;
    currentSelected.classList.add('selected');
}

images.forEach((image, index) => {
    image.addEventListener('mouseover', () => {
        texts.forEach(block => {
            block.classList.remove('active', 'show');
        });
        texts[index].classList.add('active');
        setTimeout(() => {
            texts[index].classList.add('show');
        }, 100);

        images.forEach((img) => {
            img.parentElement.classList.remove('hover');
        });
        image.parentElement.classList.add('hover');
        updateSelection(image.parentElement);
    });

    image.addEventListener('mouseout', () => {
        image.parentElement.classList.remove('hover');
    });
});




const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navItems = document.querySelectorAll('.nav__item a');
const menuText = hamburger.querySelector('span');

menuText.textContent = 'menu';

hamburger.addEventListener('click', function() {
    if (this.classList.contains('open')) {
        fadeText(menuText, 'menu');
        navItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.remove('show');
            }, index * 100);
        });
    } else {
        fadeText(menuText, 'close');
        setTimeout(() => {
            navItems.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 100);
            });
        }, 200);
    }
    this.classList.toggle('open');
    nav.classList.toggle('open');
});

navItems.forEach(item => {
    item.addEventListener('click', function() {
        hamburger.classList.remove('open');
        nav.classList.remove('open');
        navItems.forEach((navItem, index) => {
            setTimeout(() => {
                navItem.classList.remove('show');
            }, index * 100);
        });
        fadeText(menuText, 'menu');
    });
});

function fadeText(element, newText) {
    element.classList.add('fade-out');
    setTimeout(() => {
        element.textContent = newText;
        element.classList.remove('fade-out');
        element.classList.add('fade-in');
    }, 300);
    setTimeout(() => {
        element.classList.remove('fade-in');
    }, 1000);
}





const stalker = document.getElementById('mouse-stalker');
const stalkerText = document.getElementById('stalker-text');
let hovFlag = false;

document.addEventListener('mousemove', function(e) {
  stalker.style.transform = 'translate(' + (e.clientX - stalker.offsetWidth / 8) + 'px, ' + (e.clientY - stalker.offsetHeight / 6) + 'px)';
});

const linkElements = document.querySelectorAll('.hover-stalker-item');
for (let i = 0; i < linkElements.length; i++) {
  linkElements[i].addEventListener('mouseover', function(e) {
    hovFlag = true;
    stalker.classList.remove('is_shrinking');
    stalker.classList.add('is_active');
    const text = e.currentTarget.getAttribute('data-text');
    stalkerText.textContent = text;
  });

  linkElements[i].addEventListener('mouseout', function(e) {
    hovFlag = false;
    stalker.classList.add('is_shrinking');
    stalkerText.textContent = '';



  });
}

const modal = document.getElementById("contact-modal");
const btn = document.querySelector(".contact__title");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
};
span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};




const aboutSection = document.getElementById('about');
const spotlightEffect = aboutSection.querySelector('.spotlight-effect');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                spotlightEffect.style.opacity = '1';
            }, 500);
        } else {
            spotlightEffect.style.opacity = '0';
        }
    });
}, { threshold: 0.1 });

observer.observe(aboutSection);

 });


window.history.scrollRestoration = 'manual';
