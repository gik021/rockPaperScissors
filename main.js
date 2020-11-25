const game = () => {
    let pSscore = 0;
    let cScore = 0;

    //Game logic
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut")
            match.classList.add("fadeIn")
        })
    }
    // Play 
     const playMatch = () => {
         const options = document.querySelectorAll(".options button")
         const playerHand = document.querySelector(".player-hand")
         const computerHand = document.querySelector(".computer-hand")
         const hands = document.querySelectorAll(".hands img");

         hands.forEach(hand => {
             hand.addEventListener('animationend', function(){
                 this.style.animation = '';
             })
         })
         //computer option 
         const computerOptions = new Array("rock", "paper", "scissors");

         options.forEach(option => {
            option.addEventListener("click", function(){
                //computer Choice
                const computerNumber = Math.floor(Math.random() * 3)
                const computerChoice = computerOptions[computerNumber];
               
                //here we compare hands
                setTimeout(() => { compareHands(this.textContent, computerChoice)
                    //update images 
                    playerHand.src = `./assets/${this.textContent}.png`
                    computerHand.src = `./assets/${computerChoice}.png`
                }, 1500)
                //animation
                playerHand.style.animation = "shakePlayer 2s ease"
                computerHand.style.animation = "shakeComputer 2s ease"
            });
         });  
     };

     const updateScore = () => {
         const playerScore = document.querySelector(".player-score p")
         const computerScore = document.querySelector(".computer-score p")
         playerScore.textContent = pSscore;
         computerScore.textContent = cScore;
     }

     const compareHands = (playerChoice, computerChoice) => {
         const winner = document.querySelector(".winner")

         //tie
         if(playerChoice === computerChoice){
            winner.textContent = "It is a Tie";
            return;
         }
         if(playerChoice === 'rock'){
             if(computerChoice === 'scissors'){
                 winner.textContent = 'Player Wins'
                 pSscore++;
                 updateScore();
                 return;
                
             }else {
                 winner.textContent = 'Computer Wins';
                 cScore++;
                 updateScore();
                 return;
             }
         }
         //paper Check
         
         
         if(playerChoice === 'paper'){
             if(computerChoice === 'scissors'){
                 winner.textContent = 'Computer Wins'
                 cScore++;
                 updateScore();
                 return;
             }else {
                 winner.textContent = 'Player Wins';
                 pSscore++;
                 updateScore();
                 return;
             }
         }
         // scissor check
         if(playerChoice === 'scissors'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Computer Wins'
                cScore++;
                updateScore();
                return;
            }else {
                winner.textContent = 'Player Wins';
                pSscore++;
                updateScore();
                return;
            }
        }
     }

    // INNER FUNCTIONS
    startGame();
    playMatch();
}

game()