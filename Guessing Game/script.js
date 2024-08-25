//initializing some values
let totalAttempts = 5;
let attempts = 0;
let totalWons = 0;
let totalLosts = 0;


// finding elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");

//creating elements
const lostWonMessage = document.createElement("p");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    attempts++;
    if(attempts==5){
        guessingNumber.disabled=true;
        checkButton.disabled = true;
    }if(attempts<6){
        checkResult(guessingNumber.value);
        remainingAttempts.innerHTML = `Remaining attempts : ${totalAttempts-attempts}`;
    }
    guessingNumber.value = "";
});

const checkResult = (guessingNumber)=>{
    const randomNumber= getRandomNumber(5);
    if(guessingNumber==randomNumber){
        resultText.innerHTML=`You have won`;
        totalWons++;
    }else{
        totalLosts++;
        resultText.innerHTML=`You have lost ; random number was : ${randomNumber}`;
    }
    lostWonMessage.innerHTML=`Won : ${totalWons} , Lost : ${totalLosts}`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}
const getRandomNumber = (limit) =>{
    return Math.floor(Math.random()*limit)+1;
}