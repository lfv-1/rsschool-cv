let contactText = document.querySelectorAll('.contact__item__text')

for( let i=0; i<contactText.length; i++){
    contactText[i].addEventListener('click', function(){
        this.classList.toggle('active');
        let contactLink = this.nextElementSibling;
        if(contactLink.style.maxHeight){
            contactLink.style.maxHeight = null;
        } else {
            contactLink.style.maxHeight = contactLink.scrollHeight + 'px';
        }
    })
}