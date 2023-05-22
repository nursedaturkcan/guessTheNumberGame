const hint=document.getElementById("hint");
const noOfGuessesRef=document.getElementById("no-of-guesses");
const guessesNumsRef=document.getElementById("guessed-nums");
const restartButton=document.getElementById("restart");
const game=document.getElementById("game");
const guessInput=document.getElementById("guess");
const checkButton=document.getElementById("check-button");


// değişkenlerin atanması

let answer,noOfGuesses,guessedNumsArr;
// play fonksiyonunun tanımlanması
const play= function(){
    const userGuess=guessInput.value;
    if(userGuess<1 || userGuess >100){
        alert("Please enter a valid number between 1 and 100.");
        return;
    }
    // tahmin edilen numaralar dizisine userGuess ın eklenmesi
    guessedNumsArr.push(userGuess);
    // tahmin sayısının 1 arttırılması
    noOfGuesses+=1;

    // tahmin cevaba eşit değilse
    if(userGuess !=answer){
if(userGuess<answer){
    hint.innerHTML="Too low. Try Again!"
}
else{
    hint.innerHTML="Too high. Try Again!"
}
// html yapısının oluşturulması
noOfGuessesRef.innerHTML=`<span> No. Of Guesses: </span> ${noOfGuesses}`;
guessesNumsRef.innerHTML=`<span> Guessed Numbers are: </span> ${guessedNumsArr.join(",")}`;
// ipuçu classından erorr ı silmek
hint.classList.remove("error");
// eror clasının tekrar eklenmesi
setTimeout(function() {
    hint.classList.add("error");
  }, 10);
    }
     // tahmin cevaba eşitse
    else{
hint.innerHTML=`Congratulations!  <br> The number was <span> ${answer}</span>.
<br> You guessed the number in <span> ${noOfGuesses}</span> tries.`
hint.classList.add("success");
game.style.display="none";
restartButton.style.display="block";
    }




    };
    const init =function(){
console.log("Game Started");
answer=Math.floor(Math.random()*100+1);
console.log(answer);
noOfGuesses=0;
guessedNumsArr=[];
noOfGuessesRef.innerHTML="Guessed Numbers are:None."
guessInput.value="";
hint.classList.remove("success","error");
    };




// checkbutona tıklanırsa play fonksiyonunu çalıştır
checkButton.addEventListener("click",play);
window.addEventListener("load",init);
