function ticTacToe(input) {
    //helper func
    function printMatrix () {
        for(let row = 0; row < board.length; row++) {
            console.log(board[row].join("\t"));
        }
    }

    //boar for the game filled with false as value
    const board = new Array(3).fill().map(() => new Array(3).fill(false));
    let player = "X";

    //loop the input
    for(const line of input) {

        //extract matrix coordinates 

        //console.log(line);
        const [row, col] = line.split(" ").map((e) => Number(e));

        //check if place is already taken
        if(board[row][col] !== false) {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        //set the value of the current player
        board[row][col] = player;

        //check for winner
        for(let i = 0; i < 3; i++) {
            if(
                (board[i][0] === player &&
                board[i][1] === player &&
                board[i][2] === player) ||
                (board[0][i] === player &&
                board[1][i] === player &&
                board[2][i] === player) 
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }

            //check for winner
            if(
                (board[0][0] === player &&
                board[1][1] === player &&
                board[2][2] === player) ||
                (board[0][2] === player &&
                board[1][1] === player &&
                board[2][0] === player) 
            ) {
                console.log(`Player ${player} wins!`);
                printMatrix();
                return;
            }

            // includes false flag to determent when game is over
            let includesFalse = false;

            for(let row = 0; row < board.length; row++) {
                if(board[row].includes(false)) {
                    includesFalse = true
                }
            }

            //check if nobody wins
            if(!includesFalse) {
                console.log("The game ended! Nobody wins :(");
                printMatrix()
                return;
            }

            //toggle players "X" and 'O'
            player = player === "X" ? "O" : "X";
            
        }
    }

}
ticTacToe([
"0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"
])