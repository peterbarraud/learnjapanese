$( document ).ready(function() {
    // use this to find out about whois
    // http://ip-api.com/json
    var characterSet = null;
    
    // why this line?
    // so, we'll only enable start buttons when page is loaded
    $("[name='learn']").prop('disabled', false);
    $(".form-signin").submit(function(e){
        e.preventDefault();
    });

    $( '#home' ).click(function(){
        $( '#home' ).attr('height',"300px");
        $( "[name='learn']" ).show();
        $( '#movenext, #moveprevious, #movefirst, #movelast, #char_pic, .alert'  ).hide();
    })

    $( "[name='learn']" ).click(function(event){
        if ($( this ).attr('characterClass') === 'Hiragana'){
            characterSet = new Hiragana();
        } else if ($( this ).attr('characterClass') === 'Katakana'){
            characterSet = new Katakana();
        } else if ($( this ).attr('characterClass') === 'Kanji'){
            characterSet = new Kanji();
        }
        $( '#home' ).attr('height',"50px");
        $( "[name='learn']" ).hide();

        $( '#movenext, #moveprevious, #movefirst, #movelast, #char_pic, .alert'  ).show();
        characterSet.first();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    });
    // F-N-L-P
    $( '#movefirst').click(function(event){
        characterSet.first();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
        
    });

    $( '#movenext').click(function(event){
        characterSet.next();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    })

    $( '#movelast').click(function(event){
        characterSet.last();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    })

    $( '#moveprevious' ).click(function(event){
        var pos = characterSet.previous();
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
        $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
        $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    })

    $(document).keypress(function(event) {
        if ( event.which == 110 || event.which == 78 ) {
                characterSet.next();
                $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
                $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
                $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
        } else if ( event.which === 112 || event.which === 78 ) { // p for prev
                characterSet.previous();
                $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
                $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
                $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
         } else if ( event.which === 102 || event.which === 70 ) { // f for first
            characterSet.first();
            $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
            $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
            $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    } else if ( event.which === 108 || event.which === 76 ) { // l for last
            characterSet.last();
            $( '#moveprevious' ).prop('disabled', characterSet.isfirstCharacter);
            $( '#movefirst' ).prop('disabled', characterSet.isfirstCharacter);
            $( '#movelast' ).prop('disabled', characterSet.islastCharacter);
    }
        $( '#char_pic' ).prop('src',characterSet.char);
        $( '#syllable' ).text(characterSet.syllable);
     });    

});