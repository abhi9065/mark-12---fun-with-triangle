const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOfSquares(a, b) {
    const sumOfSquares = a*a + b*b ;

    return sumOfSquares;
}


function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    if(sumOfSquares){

        var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE1.innerText= "The length of hypotenuse is " + lengthOfHypotenuse

    }else{
        outputE1.innerText= "Please Enter Both The Feilds "

    }
}


hypotenuseBtn.addEventListener("click",calculateHypotenuse)