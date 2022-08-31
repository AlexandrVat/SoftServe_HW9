$(function(){
    $('input').on('click', function(){
        //console.log($(this).is(':checked') );
        //console.log($('input').prop('checked'));
        console.log($( "input:checked" ).length);
        console.log($('[type="checkbox"]:checked').length);
        
        // or $('[type="checkbox"]:checked').length

        if ($( 'input:checked' ).length == 3) {
          $('input').attr('disabled', true);
        }
      });
   
})