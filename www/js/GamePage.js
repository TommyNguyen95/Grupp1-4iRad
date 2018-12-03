class GamePage extends Component {

  constructor() {
    super();
    this.addRoute('/spela', 'Spela');

    this.renderBoard()

  }



 renderBoard() {

    let gameBox = `<div class="game-box"></div>`; //7
    let horiRow = `<tr class="hori-row"></tr>`   //6
    let count = 0;
    let count2 = 0;
    let firstRow = 0;

    $(function () {

      for (let i = 0; i < 42; i++) {


        if (count <= 42 && count2 === 0) {

          $('.row').append(gameBox);
          count++

        }


      }


    })
  }
  
}
 