const getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3) + 1

    if(n == 1){
        return "Paper";
    } else if(n == 2){
        return "Rock";
    }else if(n == 3){
        return "Scissors";
    }

}


