//initialization
let finalAttempts = 5;
let attempts = 0;
let wons = 0;
let losts= 0;


//finding
const form = document.querySelector("form");
const input = document.querySelector("input");
const resultText = document.querySelector(".resultText");
const initialResult = document.querySelector(".initialResult");
const finalResult = document.querySelector(".finalResult");
const submitButton = form.querySelector(".btn");


form.addEventListener("submit",(event)=>{
    event.preventDefault();
    if (attempts >= finalAttempts) {
        input.disabled = true;
        submitButton.disabled = true;
        return;
    }
    attempts++;
    const generatedNumber = randomNumber(5);
    const guessedInput = input.value;
    guessedNumber(guessedInput,generatedNumber);
});

const randomNumber = (limit)=>{
    return Math.floor(Math.random()*limit)+1;
};

const guessedNumber = (guessedInput,generatedNumber)=>{
    if(guessedInput==generatedNumber){
        wons++;
        initialResult.innerHTML = `You Have Won`;
    }else{
        losts++;
        initialResult.innerHTML = `You Have Lost.The Random Number Was ${generatedNumber}`;
    }
    finalResult.classList.add("large-text");
    finalResult.innerHTML = `Won : ${wons} , Lost : ${losts}`;
};