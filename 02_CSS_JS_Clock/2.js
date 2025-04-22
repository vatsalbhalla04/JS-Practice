const secondHand = document.querySelector('.sec-hand');

const minHand = document.querySelector('.min-hand')

const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date();

    // seconds hand
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60)* 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    //minutes-hand:
    const mins = now.getMinutes();
    const minsDegree = ((mins/60)*360)+90;
    minHand.style.transform = `rotate(${minsDegree}deg)`;

    //hours-hand:
    const hours = now.getHours();
    const hoursDegree = ((hours/12)*360)+90;
    hourHand.style.transform= `rotate(${hoursDegree}deg)`
}

setInterval(setDate , 1000);