var user = prompt("Please make a choice, rock, paper, or scissors: ");
var computer = Math.floor(Math.random() * 3);

switch(computer){
    case 0:
        computer = "scissors";
        break;
    case 1:
        computer = "paper";
        break;
    case 2:
        computer = "rock";
        break;    
}
while (user !== "rock" && user !== "paper" && user !=="scissors"){
  alert("please enter a valid choice");
  user = prompt("Please make a choice, rock, paper, or scissors: ");
} 
Game(user, computer);

function Game(user, computer){
    if (user === computer){
        alert(`Tie game! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "scissors" && computer === "paper"){
        alert(`Player won! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "paper" && computer === "scissors"){
        alert(`Computer won! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "rock" && computer === "paper"){
        alert(`Computer won! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "paper" && computer === "rock"){
        alert(`Player won! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "rock" && computer === "scissors"){
        alert(`Player won! Player picked ${user} and computer picked ${computer}`);
    }
    else if(user === "scissors" && computer === "rock"){
        alert(`Computer won! Player picked ${user} and computer picked ${computer}`);
    }
}
