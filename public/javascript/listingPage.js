


// When User click on fitler button
$(document).ready(function(){
$('#responsiveFilterBtn').click(function(){
    $('.filter').animate({
        width : "100%",
        left: "0%"
    })
})

$('#closeFilterBnt').click(function(){
    $('.filter').animate({
        width : "0%",
        left: "-50%"
    })
})

})