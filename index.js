$( document ).ready(function() {

    var characterSet = null;
    
    $( '#learn_hiragana' ).prop('disabled', false);
    $( '#learn_kanji' ).prop('disabled', false);
    $(".form-signin").submit(function(e){
        e.preventDefault();
    });


    $( '#learn_hiragana' ).click(function(event){
        characterSet = new Hiragana();
        $( this ).hide();
        $( '#movenext' ).show();
        $( '#moveprevious' ).show();
        $( '#char_pic' ).show();
        $( '.alert' ).show();
        characterSet.first();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
    });

    $( '#movenext').click(function(event){
        characterSet.next();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        
    })

    $( '#moveprevious').click(function(event){
        characterSet.previous();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        
    })

    $(document).keypress(function(event) {
        if ( event.which == 110 || event.which == 78 ) {
            characterSet.next();
        } else if ( event.which === 112 || event.which === 78 ) { // p for prev
            characterSet.previous();
    
        } else if ( event.which === 102 || event.which === 70 ) { // f for first
            characterSet.first();
    
        } else if ( event.which === 108 || event.which === 76 ) { // l for last
            characterSet.last();
        }
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
     });    

});