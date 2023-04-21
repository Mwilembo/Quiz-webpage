//time that redirectes to a different page when the time reaches the specified time.
let seconds = 600;
let el = document.getElementById("seconds-counter");

function startQuiz(){
    window.location.replace("questions.html");
}

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

//code to calculate the results
let answers = ["A", "C", "B"];
let total = answers.length;

function getCheckedValue(radioName) {
    let radios = document.getElementsByName(radioName);
    for (let y = 0; y < radios.length; y++)
        if (radios[y].checked) return radios[y].value;
}

function getScore() {
    let score = 0;
    for (let i = 0; i < total; i++){
        if (getCheckedValue("question" + i) === answers[i]){
            score += 1;
        }
    }
    return score;
}

function returnScore() {
    document.getElementById("myresults").innerHTML = "Your score is " + getScore() + "/" + total;
    if (getScore() > 2) {
        alert("Bravo!");
        window.location.replace('index.html');
    }
    else{
        alert("Your score is " + getScore() + "/" + total + "\nYou can do better, try Again.");
        window.location.reload();
    }

}