setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock()
{
    const pramDate = new Date()
    const secondsRatio = pramDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + pramDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + pramDate.getHours()) / 12
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(secondHand, secondsRatio)
}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)

}
setClock()

setInterval(setTime, 1000)

function setTime(){
    var prDate = new Date();
    var d = prDate.toLocaleTimeString();
    document.getElementById('clk').innerHTML=d
  
}
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
// var n = today.getDay();

today = mm + '-' + dd + '-' + yyyy;
// document.getElementById('day').innerHTML=n
document.getElementById('date').innerHTML=today
// function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var n = weekday[d.getUTCDay()];
    document.getElementById("day").innerHTML = n;
// }
