class Japanese {
    constructor(character_set) {
        this.character_set = character_set;
        this.cursor_pos = 0;
        this.cursor = [];
        for (var i=0;i<48;i++){
            this.cursor.push(i);
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;
        this.isfirstCharacter = this.cursor_pos === 0;
        this.islastCharacter = this.character_set.length-1;
    }
    

    next(){
        this.cursor_pos +=1;
        if (this.cursor_pos === this.character_set.length){
            this.cursor_pos = 0;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;     
        this.isfirstCharacter = this.cursor_pos === 0;
        this.islastCharacter = this.character_set.length-1;  
    }
    previous(){
        this.cursor_pos -= 1;
        if (this.cursor_pos === -1){
            // don't move to end
            this.cursor_pos = 0;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;
        this.isfirstCharacter = this.cursor_pos === 0;
        this.islastCharacter = this.character_set.length-1;  
    }
    first(){
        this.cursor_pos = 0;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;   
        this.isfirstCharacter = this.cursor_pos === 0;
        this.islastCharacter = this.character_set.length-1;  
    }
    last(){
        this.cursor_pos = this.character_set.length-1;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;
        this.isfirstCharacter = this.cursor_pos === 0;
        this.islastCharacter = this.character_set.length-1;  
    }
}

class Hiragana extends Japanese {
    constructor() {
        var request = new XMLHttpRequest();
        request.open('GET', 'charactersets/hiragana.json', false);  // `false` makes the request synchronous
        request.send(null);
        super(JSON.parse(request.responseText));
    }

  }
class Katakana extends Japanese {
    constructor() {
        var request = new XMLHttpRequest();
        request.open('GET', '/charactersets/katakana.json', false);  // `false` makes the request synchronous
        request.send(null);
        super(JSON.parse(request.responseText));
    }

  }  
  class Kanji extends Japanese {
    constructor() {
        var request = new XMLHttpRequest();
        request.open('GET', '/charactersets/kanji.json', false);  // `false` makes the request synchronous
        request.send(null);
        super(getKanjiJson());
    }

  }