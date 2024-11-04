//guessing game in range 1 to max
const max=prompt('enter the max number');
const Random=Math.floor(Math.random()*max)+1;
let guessed=prompt("guess the number");

while(true){
    if(guessed=='quit'){
        console.log('user quits');
        break;
    }

    if(guessed==Random){
        console.log("you are right! congrats!! random number was", Random);
        break;
    }
    else if(guessed<Random){
        guessed=prompt('hint: your guess was too small. please try again.');
    }
    else{
        guessed=prompt('hint: your guess was too large. please try again.');
    }

    // else{
    //     guessed=prompt('you guess wrong. please try again.');
    // }
}