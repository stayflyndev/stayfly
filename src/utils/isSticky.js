export const isSticky = (e) => {
    const header = document.querySelector('.is-sticky');
    const scrollTop = window.scrollY;
    header && scrollTop >= 100 ? header.classList.add('sticky') : header.classList.remove('sticky');
}