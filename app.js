const numDiv = document.querySelectorAll(".num-div");
const button = document.querySelector(".button");
const numbers = document.querySelector(".numbers");
const container2 = document.querySelector('.container2')
const okay = document.querySelector('.okay')
const span = document.querySelector('.span')

numDiv[0].addEventListener('click', function(){
    numDiv[0].classList.toggle('numbers-active')
    if (numDiv[0].style = 'numbers-active'){
        button.addEventListener('click', function(){
            container2.classList.add('display-container')
            span.innerHTML = numDiv[0].innerHTML
        })
        okay.addEventListener('click', function(){
            container2.classList.remove('display-container')
            numDiv[0].classList.remove('numbers-active')
        })
    }
    else {
        button.addEventListener(click, function(){
            container2.classList.remove('display-container')
        })
    }
})

numDiv[1].addEventListener('click', function(){
    numDiv[1].classList.toggle('numbers-active')
    if (numDiv[1].style = 'numbers-active'){
        button.addEventListener('click', function(){
            container2.classList.add('display-container')
            span.innerHTML = numDiv[1].innerHTML
        })
        okay.addEventListener('click', function(){
            container2.classList.remove('display-container')
            numDiv[1].classList.remove('numbers-active')
        })
    }
    else {
        button.addEventListener(click, function(){
            container2.classList.remove('display-container')
        })
    }
})

numDiv[2].addEventListener('click', function(){
    numDiv[2].classList.toggle('numbers-active')
    if (numDiv[2].style = 'numbers-active'){
        button.addEventListener('click', function(){
            container2.classList.add('display-container')
            span.innerHTML = numDiv[2].innerHTML
        })
        okay.addEventListener('click', function(){
            container2.classList.remove('display-container')
            numDiv[2].classList.remove('numbers-active')
        })
    }
    else {
        button.addEventListener(click, function(){
            container2.classList.remove('display-container')
        })
    }
})

numDiv[3].addEventListener('click', function(){
    numDiv[3].classList.toggle('numbers-active')
    if (numDiv[3].style = 'numbers-active'){
        button.addEventListener('click', function(){
            container2.classList.add('display-container')
            span.innerHTML = numDiv[3].innerHTML
        })
        okay.addEventListener('click', function(){
            container2.classList.remove('display-container')
            numDiv[3].classList.remove('numbers-active')
        })
    }
    else {
        button.addEventListener(click, function(){
            container2.classList.remove('display-container')
        })
    }
})

numDiv[4].addEventListener('click', function(){
    numDiv[4].classList.toggle('numbers-active')
    if (numDiv[4].style = 'numbers-active'){
        button.addEventListener('click', function(){
            container2.classList.add('display-container')
            span.innerHTML = numDiv[4].innerHTML
        })
        okay.addEventListener('click', function(){
            container2.classList.remove('display-container')
            numDiv[4].classList.remove('numbers-active')
        })
    }
    else {
        button.addEventListener(click, function(){
            container2.classList.remove('display-container')
        })
    }
})

numbers.onclick = function(e){
    if (e.target !== numbers && e.target !== numDiv[0]){
        numDiv[0].classList.remove('numbers-active')
    }
    if (e.target !== numbers && e.target !== numDiv[1]){
        numDiv[1].classList.remove('numbers-active')
    }
    if (e.target !== numbers && e.target !== numDiv[2]){
        numDiv[2].classList.remove('numbers-active')
    }
    if (e.target !== numbers && e.target !== numDiv[3]){
        numDiv[3].classList.remove('numbers-active')
    }
    if (e.target !== numbers && e.target !== numDiv[4]){
        numDiv[4].classList.remove('numbers-active')
    }
}