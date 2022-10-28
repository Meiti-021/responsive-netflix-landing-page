const inputPlaceholder = document.querySelector('.place-holder');
const emailInput = document.querySelector('#email');
const FooterInput = document.querySelector('#email-2');
const footerPlaceholder = document.querySelector('.placeholder-2')


emailInput.addEventListener('focus', ()=>{
    inputPlaceholder.style.transform = 'translate(-10px,-20px)';
    inputPlaceholder.style.fontSize = '15px';
})
emailInput.addEventListener('blur', ()=>{
    if(!emailInput.value){
        inputPlaceholder.style.transform = 'translate(0px,0px)';
        inputPlaceholder.style.fontSize = '20px';
    }
})

FooterInput.addEventListener('focus', ()=>{
    footerPlaceholder.style.transform = 'translate(-10px,-20px)';
    footerPlaceholder.style.fontSize = '15px';
})
FooterInput.addEventListener('blur', ()=>{
    if(!emailInput.value){
        footerPlaceholder.style.transform = 'translate(0px,0px)';
        footerPlaceholder.style.fontSize = '20px';
    }
})


const quastions = document.querySelectorAll('.quastion');
const answers = document.querySelectorAll('.answer');
const faqIcons = document.querySelectorAll('.faq-icon')



quastions.forEach((item)=>{
    item.addEventListener('click', (event)=>{
         if(event.target.tagName === 'DIV'){
            answers.forEach(ans => ans.classList.remove('active'))
            event.target.nextSibling.nextSibling.classList.add('active')
         } else if (event.target.tagName === 'I'){
            if(Array.from(event.target.parentElement.parentElement.nextSibling.nextSibling.classList).includes('active')){
                event.target.parentElement.parentElement.nextSibling.nextSibling.classList.remove('active');
            } else {
                answers.forEach(ans => ans.classList.remove('active'))
                event.target.parentElement.parentElement.nextSibling.nextSibling.classList.add('active')
            }
         }
    })
})
