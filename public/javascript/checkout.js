



var step2Btn = document.getElementById('step2Btn')
var step1Btn = document.getElementById('step1Btn')

var step2Line = document.getElementById('step2Line')
var step1Line = document.getElementById('step1Line');


var formStep1 = document.getElementById('formStep1')
var formStep2 = document.getElementById('formStep2')


step2Btn.addEventListener('click', function () {


    step2Btn.style.border = '3px solid #c43e95';
    

 
    
    step2Line.setAttribute('style', "border: 3px solid #c43e95")

    formStep1.style.display = "none"
    formStep2.style.display = "block"

    step1Btn.style.border = '3px solid lightgray';
    step1Line.setAttribute('style',"border: 3px solid lightgray;");


})


step1Btn.addEventListener('click', function () {


    step1Btn.style.border = '3px solid #c43e95';

    formStep1.style.display = "block"
    formStep2.style.display = "none"
    
    step1Line.setAttribute('style',"border:3px solid #c43e95")
    
    console.log(step1Line)
    step2Btn.style.border = '3px solid lightgray';
    step2Line.setAttribute('style', "border: 3px solid lightgray")

})