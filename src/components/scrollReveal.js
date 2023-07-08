import ScrollReveal from 'scrollreveal'

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 0,
})

export const removeRevealEffects= (el) => {
    el.style.transition = 'all 0.3s ease-in-out';
    el.style.transform = '';
}

ScrollReveal().reveal('.title', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.subtitle', { delay: 200, origin: 'right' });
ScrollReveal().reveal('.paragraph', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('#test .description .contact', { delay: 350, origin: 'bottom', afterReveal: removeRevealEffects });
ScrollReveal().reveal('.icons-xl a', { delay: 100, origin: 'left', interval: 200, afterReveal: removeRevealEffects });
ScrollReveal().reveal('#image', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('#aboutMe', { delay: 100, origin: 'bottom' });