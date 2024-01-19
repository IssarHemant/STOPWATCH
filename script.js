let timer=document.querySelector('.timer');
let stopbox=document.getElementById('stopbtn');
let startbox=document.getElementById('startbtn');
let resetbox=document.getElementById('resetbtn');

let msec=0;
let secs=0;
let mins=0;
let timerid=0;
stopbtn.addEventListener("click",function(){
    
        clearInterval(timerid);

});
startbtn.addEventListener("click",function(){
    if(timerid!==null){
        clearInterval(timerid);}
        timerid=setInterval(startTimer,10);
});

resetbtn.addEventListener("click",function(){
    clearInterval(timerid);
    timer.innerHTML=`00:00:00`;
    msec=secs=mins=0;
});
function startTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }
    let minutes=mins < 10 ? `0${mins}` : mins;
    let seconds=secs < 10 ? `0${secs}` : secs;
    let millisec=msec < 10 ? `0${msec}` : msec;
    
   

timer.innerHTML=`${minutes}:${seconds}:${millisec}`;}