
function setDate(){
   const now = new Date();
   const seconds=now.getSeconds();
   const secondsDeg = (360/60*seconds)+180;
   const secondhand= document.querySelector('.second-hand')
   secondhand.style.transform=`rotate(${secondsDeg}deg)`; 

   const minutes=now.getMinutes();
   const minutesDeg= 6*minutes+180;
   const minuteHand = document.querySelector(".min-hand");
   minuteHand.style.transform= `rotate(${minutesDeg}deg)`

   const hour = now.getHours();
   const hourDeg = 30*hour+180+minutes/2;
   const hourHand = document.querySelector('.hour-hand');
   hourHand.style.transform= `rotate(${hourDeg}deg)`
}
 setInterval(setDate ,1000)