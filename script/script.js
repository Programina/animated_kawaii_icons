var ele = document.getElementsByTagName("img");

function animationClick(ele, 'tada'){
    ele = $(ele);
    ele.click(
        function() {
            ele.addClass('animated ' + 'tada');        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                ele.removeClass('animated ' + 'tada');
            }, 3000);         
  
        });
}


/*$(document).ready(function(){
    $(ele).each(function() {
        animationClick(this, 'tada');
    });
});*/


$( document ).ready(function() {
    prompt( "ready!" );
});




function animationClick(){

	$("img").click(function(){

	     $(this).addClass('animated ' + 'tada');        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
             $(this).removeClass('animated ' + 'tada');
            }, 3000);         
  
        });