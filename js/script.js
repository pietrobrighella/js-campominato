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

    const BOMB = 16;
    const bombPos = []
    while(bombPos.length < BOMB){
        const bomb = randomNumber(1, cellGame);
        if(!bombPos.includes(bomb)){
            bombPos.push(bomb);
        }
    }

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
            <span>${i}<span>
            `
            gameCamp.appendChild(cell);
            cell.addEventListener('click', function(){
                if(bombPos.includes(i)){
                    this.classList.add('bg-danger');
                    const gameOver = document.createElement('div');
                    gameOver.classList = 'game-over d-flex justify-content-center align-items-center shadow-lg';
                    gameOver.innerHTML = `<h3>GAME OVER</h3>`;
                    gameCamp.appendChild(gameOver);
                } else {
                    this.classList.add('bg-success');
                }
            })
        }
    }

    drawCamp();
}

startButton.addEventListener('click', gameStart);