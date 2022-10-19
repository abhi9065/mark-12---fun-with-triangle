var inputSide = document.querySelectorAll(".input-side");
var calculateButton = document.querySelector(".calculate-button");
var outputBox = document.querySelector(".output-box");

function calculateSumOfSides(base,height){
    var sumOfSides =(base*height);
    return sumOfSides;

}

function calculateButtonHandler() {
    var sumOfSides = calculateSumOfSides(Number(inputSide[0].value),Number(inputSide[1].value));
    
    if(sumOfSides){
        var areaOfTringle = (sumOfSides)/2;
 
        outputBox.innerText= "The Area Of Tringle is in " + areaOfTringle + " cm2"
    }else{
        outputBox.innerText= "Please Enter Both The Feilds"

    }
   
   

   

}


calculateButton.addEventListener("click", calculateButtonHandler)