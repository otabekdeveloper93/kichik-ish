const number = document.querySelector('#input'), submit = document.querySelector('#submit'), positive = document.querySelector('#positive'), negative = document.querySelector('#negative'), neutral = document.querySelector('#neutral'), content =document.querySelector('.content');
const p = document.querySelectorAll('.p');
p.forEach((item) =>{
    item.addEventListener('click',(e) =>{
        if(e.target.id == "positive"){
            positive.classList.add("opacity");
            negative.classList.remove("opacity");
            neutral.classList.remove("opacity");
        }else if(e.target.id == "negative"){
            negative.classList.add("opacity");
            positive.classList.remove("opacity");
            neutral.classList.remove("opacity");
        }else if(e.target.id == "neutral"){
            neutral.classList.add("opacity");
            positive.classList.remove("opacity");
            negative.classList.remove("opacity");
        }    
       content.innerText = `${e.target.id} content`;
    });

})
submit.addEventListener('click',change);
function change(el) {
    el.preventDefault();
    if(number.value == 1){
        positive.style.opacity = "1";
        content.innerText = "positive content";
        negative.style.opacity = "0.5";
        neutral.style.opacity = "0.5"
    }else if(number.value == 2){
        negative.style.opacity = "1";
        content.innerText = "negative content";
        positive.style.opacity = "0.5";
        neutral.style.opacity = "0.5"
    }else if(number.value == 3){
        neutral.style.opacity = "1";
        content.innerText = "neutral content";
        negative.style.opacity = "0.5";
        positive.style.opacity = "0.5"
    }else{
        alert('invalid number');
    }
}

