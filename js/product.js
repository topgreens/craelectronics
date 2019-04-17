const buttons = document.querySelectorAll('.button');
const addTexts = document.querySelectorAll('.add-text');
const addedTexts = document.querySelectorAll('.added-text');


for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        addTexts[i].classList.toggle('hidden');
        addedTexts[i].classList.toggle('hidden');
    })
}

