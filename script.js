"use strict";

const adviceCall = async () => {
    try {
   const apiUrl = "https://api.adviceslip.com/advice";
   const response = await fetch(apiUrl);
   if(!response.ok) {
    throw new Error("Network response was not ok");
   }    
   const data = await response.json();
   return data.slip.advice;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }

};

async function handleButtonClick(){
    const advice = await adviceCall();
    document.getElementById("adviceDisplay").innerText = advice;
}

document.getElementById("adviceButton").addEventListener("click", handleButtonClick);