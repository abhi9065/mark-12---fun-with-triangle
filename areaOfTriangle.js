var inputSide = document.querySelectorAll(".input-side");
var calculateButton = document.querySelector(".calculate-button");
var outputBox = document.querySelector(".output-box");

function calculateSumOfSides(base,height){
    var sumOfSides =(base*height);
    return sumOfSides;

}

function calculateButtonHandler() {
    var sumOfSides = calculateSumOfSides(Number(inputSide[0].value),Number(inputSide[1].value));
    var areaOfTringle = (sumOfSides)/2;
 
    outputBox.innerText= "The Area Of Tringle is in " + areaOfTringle + " cm2"
   

}


calculateButton.addEventListener("click", calculateButtonHandler)