document.addEventListener('mousemove', paralax);

function paralax(event){
    this.querySelectorAll('.paralax-items').forEach(element => {
        let speed = element.getAttribute('data-speed');
        element.style.transform = `translateX(${-event.clientX*speed/1000}px) translateY(${-event.clientY*speed/1000}px)`
    });
}