class Hiragana {
    constructor() {
        this.character_set = getHiraganaJson();
        this.cursor_pos = 0;
        this.cursor = [];
        for (var i=0;i<48;i++){
            this.cursor.push(i);
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;
    }
    next(){
        this.cursor_pos +=1;
        if (this.cursor_pos === this.character_set.length){
            this.cursor_pos = 0;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
        
    }
    previous(){
        this.cursor_pos -= 1;
        if (this.cursor_pos === -1){
            this.cursor_pos = this.character_set.length-1;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
    }
    first(){
        this.cursor_pos = 0;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
    }
    last(){
        this.cursor_pos = this.character_set.length-1;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
    }

  }