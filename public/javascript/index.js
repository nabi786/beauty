console.log('Welcome to this page');






// When user click on Seach Button in Destop mood
var searchOption = document.getElementById('searchOption')
var searchInput = document.getElementById('searchInput')

searchOption.addEventListener('click', function(){
    
    if(searchInput.style.display === "block"){

        searchInput.style.display = "none"
    }else{
        searchInput.style.display = "block"
    }

})




// When user scroll down than show navigation 
window.onscroll = function(){
   var topValue =  document.body.scrollTop;
   var scrollValue = document.documentElement.scrollTop
    var headerSection = document.getElementsByClassName('headerSection')
   
   if(scrollValue > 120){
    headerSection[0].setAttribute('id',"headerSection")
   }else{
    headerSection[0].removeAttribute('id')
   }

}















var responsiveBtn = document.getElementById("responsiveBtn");

var navigation = document.getElementsByClassName("navigation");
responsiveBtn.addEventListener('click', function(){
    
    navigation[0].style.display ="block";

    $('#menu').animate({
        left : "0%"
    })
})


// When user want to close menu
    

$('#closeBtn').click(function(){
    $('#menu').animate({
        left : "-200%"
    })
    navigation[0].style.display ="none";
    
})

















// DropDown Close and Open button in Responsive Mood
var plus = document.getElementsByClassName('plusMinus');

plus =  Array.from(plus) 

plus.forEach(function(elm, index){


        index = index+1;
        
        var dorpDownMenu  = document.getElementById(`categoryDropDown_${index}`);

        expendElement = document.getElementById(`ExpandList_${index}`);
        collapse = document.getElementById(`collapse_${index}`)


        
            // When user clock on plus button than show dropDown
            expendElement.addEventListener("click", function(){
                
                dorpDownMenu.style.display = "block";
                expendElement.style.display = "none"
                collapse.style.display = "block"
            }) 
        

            // When user clock on minus button than hide dropDown

            collapse.addEventListener("click", function(){
             
                dorpDownMenu.style.display = "none";
                expendElement.style.display = "block"
                collapse.style.display = "none"
            }) 
        
      
            

        

})





















