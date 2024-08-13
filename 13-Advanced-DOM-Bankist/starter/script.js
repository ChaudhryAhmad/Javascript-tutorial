'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
// ------------------------------Implement Smooth Scrolling--------------------------------------

btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  // section 1 k bare
  console.log(s1coords);
  
  // button k bare
  console.log(e.target.getBoundingClientRect());
  
  // Scroll btata hai kitna huva hai
  console.log('Current Scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'height/Width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Scrolling
  // ---------------Old way of doing it
  // window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset);

  // window.scrollTo({
  //   left:s1coords.left+window.pageXOffset,
  //   top:s1coords.top+window.pageYOffset,
  //   behavior:'smooth'
  // })
  // ---------------Modern Way
  section1.scrollIntoView({
    behavior: 'smooth',
  });
});

//////////////////////////////////////////////////
// Page Navigation

// ------------Takes much place
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     const id=this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior:'smooth'
//     });
//   })
// })


// 1)In event delegation we add the eventlistener to the common parent
// 2)Determine what element originated the event

// Takes less space

document.querySelector('.nav__links').addEventListener('click',function(e){
  e.preventDefault();

  // Matching Strategy
  if(e.target.classList.contains('nav__link')){
    const id=e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({
    behavior:'smooth'
    });
  }
})

// // /////////////////////////////////////////////
// ////////////////////////////////////////////////

// // Selecting Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');

// // Creating and Inserting Elements

// const message = document.createElement('div');
// message.classList.add('cookie-message');

// message.innerHTML =
//   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);

// // // Delete Elements
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function (e) {
//     e.target.parentNode.remove();
//   });

// // Styles
// message.style.backgroundColor='#37383d';
// message.style.width='120%';

// console.log(getComputedStyle(message).color);

// message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+40+'px';
// // document.documentElement.style.setProperty('--color-primary','orangered');

// // Attributes
// const logo=document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// logo.alt='Beautiful Minimalist logo';

//Non Standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company','Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link=document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));



// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function (e) {
//   alert('addEventListener: Great! You are reading the heading:D');
// });


// const h1=document.querySelector('h1');

// console.log(h1);
// // Going Downwards Child
// console.log(h1.childNodes)
// console.log(h1.children);
// h1.firstElementChild.style.color='white';
// h1.lastElementChild.style.color='orangered';

// //Going upwards: parents
// console.log(h1.parentElement);
// console.log(h1.parentNode);

// h1.closest('.header').style.background='var(--gradient-secondary)';

// h1.closest('h1').style.background='var(--gradient-primary)';

/////////// Going Sideways : Siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);