
var increaseQty = document.getElementsByClassName('increaseQty');

var dicreaseQty = document.getElementsByClassName(['dicreaseQty'])


increaseQty = Array.from(increaseQty)
dicreaseQty = Array.from(dicreaseQty)

increaseQty.forEach(function(elm,index){
    
    var quantityValue = document.getElementById(`quantityValue_${index+1}`);

    var subTotalPriceOfItem = document.getElementsByClassName('subTotalPriceOfItem')[index];
    var price = parseInt(subTotalPriceOfItem.innerText)
    price =  Math.floor(price)
      
    var x = 1;
   
    elm.addEventListener('click', function(){
        
        x++
      
        var qty =  x;
        
        quantityValue.innerText = qty;
        var subTotal = price * qty;
        document.getElementsByClassName('subTotalPriceOfItem')[index].innerText = subTotal + ".00"

    });

    
})


dicreaseQty.forEach(function(decElm,index){

    var quantityValue = document.getElementById(`quantityValue_${index+1}`);

    var subTotalPriceOfItem = document.getElementsByClassName('subTotalPriceOfItem')[index];
    var price = parseInt(subTotalPriceOfItem.innerText)
    price =  Math.floor(price)
    
    decElm.addEventListener('click', function(){
        
        var qtyValue = quantityValue.innerText;


        var x = parseInt(qtyValue);

        x--;
        if(x > 0){

         

            qty = x
            quantityValue.innerText = qty;

            
            var subTotal = price * qty;
            
            document.getElementsByClassName('subTotalPriceOfItem')[index].innerText = subTotal + ".00"
        }

    })
    
})