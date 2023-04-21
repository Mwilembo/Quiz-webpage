//time that redirectes to a different page when the time reaches the specified time.
let seconds = 600;
let el = document.getElementById("seconds-counter");

function intervalSeconds(){
    seconds --;
    if(seconds == -1){
        alert("Time is up!");
        window.location.replace("redirect.html");
    }
    else{
        el.innerText = "Time: " + seconds + " seconds left.";
    }
}

let cancel = setInterval(intervalSeconds,1000);