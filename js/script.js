const startButton = document.getElementById('start-button');

function gameStart(){
    const selectLevel = document.getElementById('select-level').value;
    let cellGame;

    switch(selectLevel){
        case '1':
            cellGame = 100;
            break;
        case '2':
            cellGame = 81;
            break;
        case '3':
            cellGame = 49;
            break;
    }

    //Operatore terniario che in questo caso sostiuirebbe completamente lo switch oltre che inserire il risultato in una variabile
    //const numCell = (selectLevel === 1) ? 100 : (selectLevel === 2) ? 81 : 49;

    const BOMB = 16;
    const bombPos = []
    while(bombPos.length < BOMB){
        const bomb = randomNumber(1, cellGame);
        if(!bombPos.includes(bomb)){
            bombPos.push(bomb);
        }
    }

    // controllo il numero delle possibilità
    const MAX_ATTEMPT = cellGame - BOMB
    score = 0;
    console.log(bombPos);

    function drawCamp(){
        const gameCamp = document.getElementById('game-camp');
        gameCamp.innerHTML = '';

        const cellCamp = Math.sqrt(cellGame);
        
        for(let i = 1; i <= cellGame; i++){
            const cell = document.createElement('div');
            cell.classList = 'cell d-flex justify-content-center align-items-center';
            cell.style.width = `calc(100% / ${cellCamp})`
            cell.style.height = `calc(100% / ${cellCamp})`
            cell.innerHTML = `
            <span class="square">${i}<span>
            `
            gameCamp.appendChild(cell);

            cell.addEventListener('click', controlGame)

            function controlGame(){
                if(bombPos.includes(i)){
                    this.classList.add('bg-danger');
                    const gameOver = document.createElement('div');
                    gameOver.classList = 'game-over d-flex justify-content-center align-items-center shadow-lg';
                    gameOver.innerHTML = `
                    <div class="d-flex flex-column text-center mt-3">
                        <h3>GAME OVER</h3>
                        <p>Score: ${score}</p>
                    </div>`;
                    gameCamp.appendChild(gameOver);

                    endGame();
                    cell.removeEventListener('click', endGame);

                    function endGame(){
                        const squares = document.querySelectorAll('.square');
                        for(let i = 0; i < squares.length; i++) {
                            const num = parseInt(squares[i].innerText);
                            if(bombPos.includes(num)){
                                parentSquare = squares[i].parentNode;
                                parentSquare.classList.add('bg-danger');
                            }
                        }
                    }
    
                } else {
                    this.classList.add('bg-success');
                    score++;
                    console.log(score);
                    if (score == MAX_ATTEMPT){
                        endGame();
                    }
                }
            }
        }
    }   

    drawCamp();
}

startButton.addEventListener('click', gameStart);