class HiScorePage extends Component {

    constructor(){
        super();
        this.addRoute('/hiscore', 'hiscore');
        this.addEvents({
            'click .add-btn': 'addItem',
            'keyup .to-add': 'addItemOnEnter'
        });
        
        this.highscoreList = new List(this);

    }

    addItem(){
        let playerName = 'Player name';
        let playerScore = 11;
        this.highscoreList.addItem(playerName, playerScore);
        this.update();
    }


    addItemOnEnter(e){
        if(e.which === 13){
            this.addItem();
    }

}

update(){
  this.render();
  // optional to save all data to json
  JSON._save('highscore', {data: this});
}
}