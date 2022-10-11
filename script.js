const your_choice_img = document.querySelector("#your_choice_img")
const computer_choice_img = document.querySelector("#computer_choice_img")

const choices = document.querySelectorAll(".choice")
const rock = document.querySelector("#rock")
const papper = document.querySelector("#papper")
const scissors = document.querySelector("#scissors")

const your_score = document.querySelector("#your_score")
const computer_score = document.querySelector("#computer_score")

const result = document.querySelector("#result_p")

const result_msg = document.querySelector(".result_msg")
const play_again = document.querySelector("#play_again")
const winner = document.querySelector("#winner")
const winner_img = document.querySelector("#winner_img")
const y_final_score = document.querySelector("#y_final_score")
const c_final_score = document.querySelector("#c_final_score")

const main_container = document.querySelector(".main_container")


const getComputerChoice = () => {
    let n = Math.floor(Math.random() * 3) + 1

    if(n == 1){
        return "rock"
    } else if(n == 2){
        return "papper"
    } else if (n == 3){
        return "scissors"
    }
}

let y_score = 0;
let c_score = 0;

choices.forEach(choice => {
    choice.addEventListener("click", () => {

        if(event.target.id == "rock"){
            your_choice_img.src = "images/rock.png"
        } else if (event.target.id == "papper"){
            your_choice_img.src = "images/papper.png";
        }else if (event.target.id == "scissors"){
            your_choice_img.src = "images/scissors.png";
        }

        let computer_choice = getComputerChoice()

        if(computer_choice == "rock"){
            computer_choice_img.src = "images/rock.png";
        } else if (computer_choice == "papper"){
            computer_choice_img.src = "images/papper.png";
        }else if (computer_choice = "scissors"){
            computer_choice_img.src = "images/scissors.png";
        }

        if(event.target.id == "rock" && computer_choice == "scissors"){
            y_score += 1;
            result.innerHTML = "Rock beats Scissors"
        } else if(event.target.id == "rock" && computer_choice == "papper"){
            c_score += 1;
            result.innerHTML = "Papper beats Rock"
        }else if(event.target.id == "scissors" && computer_choice == "papper"){
            y_score += 1;
            result.innerHTML = "Scissors beats Papper"
        } else if(event.target.id == "scissors" && computer_choice == "rock"){
            c_score += 1;
            result.innerHTML = "Rock beats Scissors"
        } else if(event.target.id == "papper" && computer_choice == "scissors"){
            c_score += 1;
            result.innerHTML = "Scissors beats Papper"
        } else if(event.target.id == "papper" && computer_choice == "rock"){
            y_score += 1;
            result.innerHTML = "Papper beats Rock"
        }   else if(event.target.id == computer_choice){
            result.innerHTML = "Tied";
        }

        your_score.innerHTML = y_score;
        computer_score.innerHTML = c_score;

        if(c_score == 5 || y_score == 5){
            result_msg.classList.remove("hide");
            main_container.classList.add("blur");
            y_final_score.innerHTML = y_score;
            c_final_score.innerHTML = c_score;

            if(c_score == 5){
                winner.innerHTML = "Computer won !";
                winner_img.src = "images/robo.svg";
            } else {
                winner.innerHTML = "You won !";
                winner_img.src = "images/man.svg";
            }
        }
})

})

play_again.addEventListener("click", () => {
        result_msg.classList.add("hide");
        main_container.classList.remove("blur");

        y_score = 0;
        c_score = 0;
        your_score.innerHTML = y_score;
        computer_score.innerHTML = c_score;
        your_choice_img.src = "https://www.pngmart.com/files/11/Interrogation-PNG-HD.png";
        computer_choice_img.src = "https://www.pngmart.com/files/11/Interrogation-PNG-HD.png";
})




