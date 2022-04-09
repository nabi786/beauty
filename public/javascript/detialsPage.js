
var increaseQty = document.getElementsByClassName('increaseQty');

var dicreaseQty = document.getElementsByClassName(['dicreaseQty'])


increaseQty = Array.from(increaseQty)
dicreaseQty = Array.from(dicreaseQty)

increaseQty.forEach(function(elm,index){
    
    var quantityValue = document.getElementById(`quantityValue_${index+1}`);

      
    var x = 1;
   
    elm.addEventListener('click', function(){
        
        x++
      
        var qty =  x;
        
        quantityValue.innerText = qty;
       
    });

    
})


dicreaseQty.forEach(function(decElm,index){

    var quantityValue = document.getElementById(`quantityValue_${index+1}`);

    
    decElm.addEventListener('click', function(){
        
        var qtyValue = quantityValue.innerText;


        var x = parseInt(qtyValue);

        x--;
        if(x > 0){

         

            qty = x
            quantityValue.innerText = qty;
  
        }

    })
    
})