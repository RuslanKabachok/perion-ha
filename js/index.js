const hero = document.querySelector('.hero');
const frames = ['frame-1', 'frame-2', 'frame-3'];
let currentFrame = 0;

function goToFrame(index) {
    hero.classList.remove(...frames);
    hero.classList.add(frames[index]);
}

goToFrame(0);

let isScrolling = false;

window.addEventListener('wheel', (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0 && currentFrame < frames.length - 1) {
        currentFrame++;
        goToFrame(currentFrame);
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000);
    }

    if (e.deltaY < 0 && currentFrame > 0) {
        currentFrame--;
        goToFrame(currentFrame);
        isScrolling = true;
        setTimeout(() => { isScrolling = false; }, 1000);
    }
});