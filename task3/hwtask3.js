$(function(){
    let dv = $('div');
   // console.log( $('div'));
   // console.log( $('div').prev('h3'));    
   //   dv.insertBefore(dv.prev('h3'));


     dv.each(function( index ) {
        console.log( index + ': ' + $( this ).text() );
        $( this ).insertBefore($( this ).prev('h3'));
      });

   
})