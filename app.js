$(document).ready(function(){
$('#manu').click(function(){
    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');
});
$(window).on('scroll load',function(){
    $('#manu').removeClass('fa-times');
    $('header').removeClass('toggle');
});
});

const send  = () => {
    console.log("hellow");
    alert("Message Sent !!")
}