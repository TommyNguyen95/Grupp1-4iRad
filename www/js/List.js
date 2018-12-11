class List extends Component {

    constructor(page){
        super();
        this.page = page;
        this.items = [];
    }


    addItem(name, score){
        let lowestRank = this.items.length -1;
        let lowestRankScore = this.items[lowestRank].score;

        if (score <= lowestRankScore && this.items.length <= 10){

            for(let i = 0; i <= this.items.length - 1; i++){

                if(this.items[i].score > score){

                    let newIndex = this.items.indexOf(this.items[i])
                    i = this.items.length;

                    this.items.splice(newIndex, 0, new Item(this, name, score));
                }
            }

        }

        if(this.items.length > 10){
        
            this.removeItem(lowestRank);

        }
  
    }
  
    removeItem(item){
        this.items.splice(this.items.indexOf(item), 1);
        this.page.update();
    }
    
  }