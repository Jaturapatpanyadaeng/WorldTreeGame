import ScrollReveal from "scrollreveal";

ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('#ScrollTop ', { origin: 'top' });
ScrollReveal().reveal('#ScrollBottom , .heading , .box', { origin: 'bottom' });
ScrollReveal().reveal('#ScrollLeft ', { origin: 'left' });
ScrollReveal().reveal('#ScrollRight , .texter ', { origin: 'right' });