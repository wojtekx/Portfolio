const el = document.querySelector('main');

document.querySelector('.circle').addEventListener('click', (el) => {
    scrollBy({
        behavior: "smooth",
        left: 0,
        top: window.innerHeight,
    })
});