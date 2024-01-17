"use strict";

const adviceCall = async () => {
    try {
   const apiUrl = "https://api.adviceslip.com/advice";
   const response = await fetch(apiUrl);
   if(!response.ok) {
    throw new Error("Network response was not ok");
   }    
   const data = await response.json();
   const advice = data.slip.advice;
   const id = data.slip.id;
   console.log(id)
   console.log(advice)
   return {advice, id}
    } catch (error) {
        console.log("Error:", error);
        return null;
    }

};

async function handleButtonClick(){
    const results = await adviceCall();
    if(results){
        document.getElementById("adviceDisplay").innerText = results.advice;
        document.getElementById("idDisplay").innerText = "Advice #" + results.id;
    }
}

document.getElementById("adviceButton").addEventListener("click", handleButtonClick);