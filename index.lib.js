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
    }

    next(){
        this.cursor_pos +=1;
        if (this.cursor_pos === this.character_set.length){
            this.cursor_pos = 0;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
        return this.cursor_pos;
    }
    previous(){
        this.cursor_pos -= 1;
        if (this.cursor_pos === -1){
            // don't move to end
            this.cursor_pos = 0;
        }
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;
        return this.cursor_pos;
    }
    first(){
        this.cursor_pos = 0;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
        return this.cursor_pos;
    }
    last(){
        this.cursor_pos = this.character_set.length-1;
        this.char = this.character_set[this.cursor[this.cursor_pos]].char;
        this.syllable = this.character_set[this.cursor[this.cursor_pos]].syllable;        
        return this.cursor_pos;
    }
}

class Hiragana extends Japanese {
    constructor() {
        super(getHiraganaJson());
    }

  }