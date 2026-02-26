const hero = document.querySelector('.hero');

hero.classList.add('frame-1');

setTimeout(() => {
    hero.classList.remove('frame-1');
    hero.classList.add('frame-2');
}, 1200);

setTimeout(() => {
    hero.classList.remove('frame-2');
    hero.classList.add('frame-3');
}, 2800);