const mario = document.querySelector('.mario');
let pipe = document.querySelector('.pipe');
let restartButton = document.querySelector('.restart-button');
let clouds = document.querySelector('.clouds');

const jump = () => {
    if (!mario.classList.contains('jump')) {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
}

const movePipe = () => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = mario.offsetLeft;

    pipe.style.left = `${pipePosition - 11}px`;

    if (pipePosition <= marioPosition + 120 && pipePosition + pipe.offsetWidth >= marioPosition) {
        const marioBottom = mario.offsetTop + mario.offsetHeight;
        const pipeTop = pipe.offsetTop;
        if (marioBottom >= pipeTop) {
            clearInterval(loop);
            mario.src = 'img/game-over.png';
            mario.style.width = '80px'; 
            mario.style.bottom = '50px'; 
            restartButton.style.display = 'block';
            clouds.classList.add('stop'); 
            document.body.classList.add('game-over'); 
        }
    }

    if (pipePosition + pipe.offsetWidth < 0) {
        pipe.style.left = '100%';
    }
}

const loop = setInterval(movePipe, 10);

document.addEventListener('keydown', jump);

restartButton.addEventListener('click', () => {
    location.reload();
});
