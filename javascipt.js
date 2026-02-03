
const title =document.getElementById('main-title')
const descriptions =document.getElementsByClassName('description')
const btn =document.getElementById('calc-btn')



// manipulate title text

title.innerText="Dom manipulation"

// simple addition logic

btn.addEventListener('click', function(){
    const first = document.getElementById('num1').value
    const second = document.getElementById('num2').value
    // convert string to number

    const sum = Number(first) + Number(second)

    document.getElementById('result').innerText = "the total is:" + sum

})

// change color 

title.style.color="blue"
title.style.backgroundColor="yellow"
title.style.fontSize="24px"
