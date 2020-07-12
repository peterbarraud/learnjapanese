getHiraganaJson = () => {
    $.getJSON('charactersets/hiragana.json', function(hiraganajson) {
        return hiraganajson;
     });
}

