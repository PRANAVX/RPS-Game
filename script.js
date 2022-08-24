let choices =["Rock","Paper","Scissor"]
function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)]
}

function play(playerSelection,computerChoice){
    if(playerSelection=="Rock"){
        if(computerChoice=="Rock"){
            return "Draw"
        }
        else if(computerChoice=="Paper"){
            return "You lose"
        }
        else{
            return "You win"
        }

    }

    else if(playerSelection=="Paper"){
    
        if(computerChoice=="Rock"){
            return "You Win"
        }
        else if(computerChoice=="Paper"){
            return "Draw"
        }
        else{
            return "You Lose"
        }

    }

    else{

        if(computerChoice=="Rock"){
            return "You Lose"
        }
        else if(computerChoice=="Paper"){
            return "You Win"
        }
        else{
            return "Draw"
        }

    }
}

function game(){
    for(let i=0;i<5;i++){
        console.log(play(prompt("Enter Your Weapon :"),getComputerChoice()))
    }
}

game()