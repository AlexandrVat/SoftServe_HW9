$(function(){
    console.log( $('a[href^="https://"]'));
    $('a[href^="https://"]').attr('target', '_blank'); 
   
})