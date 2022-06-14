let menu = document.querySelectorAll('.menu__item');
for(let i=6;i>0;i--){
    menu.forEach(elem=>{
        elem.style.zIndex = i--;
    })
}