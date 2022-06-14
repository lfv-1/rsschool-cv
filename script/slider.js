const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const controls = document.querySelectorAll('.control__btn');
const container = document.querySelector('.section__projects');

let activeOrder = 0;

function init(){
    for (let i =0; i<slides.length;i++){
        const slide = slides[i];
        slide.dataset.order = i;
        slide.addEventListener('click',clickHandler)
        slide.style.background = `url(./assets/img/${i+1}.jpg) no-repeat`
        slide.style.backgroundSize = 'cover';
    }

    for(const control of controls){
        control.addEventListener('click',controlBtn);
    }

    activeOrder = Math.floor(slides.length / 2);
    update();
}

init()

function update(){
    const { width, height } = container.getBoundingClientRect();
    const slideRect = slides[0].getBoundingClientRect();

    const a = width / 2;
    const b = height / 3;

    const delta = Math.PI / slides.length / 3;

    for(let i = 0; i < slides.length; i++){
        const leftSlide = document.querySelector(
            `.slide[data-order = "${activeOrder - i}"]`)
    

        if(leftSlide){
            leftSlide.style.zIndex = slides.length-i;
            leftSlide.style.opacity = 1 - (1.5 * i) / slides.length;

            leftSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 - delta * i * 2)}px`
            leftSlide.style.top = `${- b * Math.sin((Math.PI*3) / 2 - delta * i * 2)}px`
        }

        const rightSlide = document.querySelector(`.slide[data-order = "${activeOrder +i}"]`);
        
        if(rightSlide){
            rightSlide.style.zIndex = slides.length - i;
            rightSlide.style.opacity = 1 - (1.5 * i) / slides.length;

            rightSlide.style.left = `${width / 2 + a * Math.cos((Math.PI * 3) / 2 + delta* i * 2)}px`
            rightSlide.style.top = `${-b * Math.sin((Math.PI * 3) / 2 + delta * i * 2)}px`
        }
    }
}


function clickHandler(){
    const order = parseInt(this.dataset.order, 10)
    activeOrder = order;
    update();
}

function controlBtn(e){
    e.preventDefault();
    const {dir} = this.dataset;

    if (dir == 'prev'){
        activeOrder = Math.max(0, activeOrder - 1)
    }else if (dir == 'next'){
        activeOrder = Math.min(slides.length - 1, activeOrder + 1)
    }

    update();
}

