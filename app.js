var hour=00;
var separator;
var min=00;
var sec=00;
var miliSec=00;
var stopWatch;
var lap=0;
function timer() {
    var secTimer=Math.round(sec*1.667);
    var minTimer=Math.round(min*1.667);
    
    var hourTimer=Math.round(hour*4.667);

    miliSec++
    miliSecHeading.innerHTML=miliSec+" ms";
    document.getElementById("miliSecDiv").className="c100 small p"+miliSec;
    document.getElementById("secDiv").className="c100 xsmall p"+secTimer ;
    document.getElementById("minDiv").className="c100 p"+minTimer ;
    document.getElementById("hourDiv").className="c100 big p"+hourTimer ;

    if (miliSec>=100){
        sec++
        secHeading.innerHTML=sec+" Sec";
        miliSec=00;
        document.getElementById("miliSecDiv").className+=" p1";
       
        }

    if (sec>=20){
        min++
        minHeading.innerHTML=min+" Min";
        sec=00;
        secHeading.innerHTML=sec;

    }
    if (min>=5){
        hour++
        hourHeading.innerHTML=hour+" hr";
        min=00;
        minHeading.innerHTML=min+" Min";

    }

}

function startWatch() {
    stopWatch= setInterval(timer, 10)
    document.getElementById("startButton").disabled = true;

    document.getElementById("pauseButton").disabled = false;
    document.getElementById("lapButton").disabled = false;
    document.getElementById("stopButton").disabled = false;

}
function pauseWatch() {
    clearInterval(stopWatch)

    document.getElementById("pauseButton").disabled = true;
    document.getElementById("lapButton").disabled = true;


    document.getElementById("startButton").disabled = false;
        document.getElementById("stopButton").disabled = false;
}

function laps() {
    lap++
    lapsText.innerHTML+="<h3>Lap : "+lap+" completed at "+hour+" Hours, "+min+" Minutes, "+sec+" Seconds and "+miliSec+" Miliseconds.</h3>";
    min=00;
    sec=00;
    hour=00;
    miliSec=00;
    minHeading.innerHTML=min;
    secHeading.innerHTML=sec;
    miliSecHeading.innerHTML=miliSec;
    hourHeading.innerHTML=hour;
    clearInterval(stopWatch)

    stopWatch= setInterval(timer, 10)


}
function stopNow() {
    
    stopText.innerHTML="<h1>"+hour+" Hours, "+min+" Minutes, "+sec+" Seconds and "+miliSec+" Miliseconds.</h1>"; 
    min=0;
    sec=0;
    hour=0;
    miliSec=0;
    minHeading.innerHTML=min+" Min";
    secHeading.innerHTML=sec+" Sec";
    miliSecHeading.innerHTML=miliSec+" MS";
    hourHeading.innerHTML=hour+" Hour";
    clearInterval(stopWatch)
    document.getElementById("miliSecDiv").className="c100 small p"+miliSec;
    document.getElementById("secDiv").className="c100 xsmall p"+sec ;
    document.getElementById("minDiv").className="c100 p"+min;
    document.getElementById("hourDiv").className="c100 big p"+hour;

    document.getElementById("pauseButton").disabled = true;
    document.getElementById("lapButton").disabled = true;
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}