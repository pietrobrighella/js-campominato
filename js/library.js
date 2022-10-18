// generatore numeri random
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// verifica numeri pari/dispari
function isEven(num){
    if(num % 2 === 0){
        return true;
    } else {
        return false;
    }
}