function countdown_timerV1(){
    //manual countdown timer
    console.log("countdown_timerV1() begin");
    var counter = 50;
    document.getElementById("countdown_display").innerHTML = counter;
    console.log(counter);
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 5000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 10000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 15000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 20000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 25000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 30000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 35000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 40000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = counter;
        console.log(counter);
    }, 45000)
    setTimeout(function(){
        counter = counter - 5;
        document.getElementById("countdown_display").innerHTML = "Blastoff!";
        console.log(counter);
    }, 50000)
}
//better blastoff function
function btrBlastoff(){
    //variables
    var delayTime = 5000
    var counter = 50;
    var numSteps = 10;
    //dependent variables
    var counterStep = counter/numSteps;
    var halfCounter = counter / 2;
    //code
    for (var i = 0; i < numSteps; i++){
        setTimeout(function(){ 
            //setting display for counter being zero
            if (counter == 0){
                console.log("Blastoff!!!");
                document.getElementById("countdown_display").innerHTML = "Blastoff!";
                //setting display for counter being greater than zero
            } else if(counter < halfCounter){
                //setting halfway counter to change display
                console.log(counter);
                document.getElementById("countdown_display").innerHTML 
                    = "Warning Less than ½ way to launch, time left = " + counter;
            } else {
                console.log(counter);
                document.getElementById("countdown_display").innerHTML = counter;
            }
            counter = counter - counterStep;
        }, delayTime * i);
    }
}
    var numWin = 0;
    var numLose = 0;
    var numTie = 0;
//creating craps game
function play_craps(){
    console.log("play_craps() started");
    var die1;
    var die2;
    die1 = Math.floor(Math.random() * 6) + 1;
    console.log(die1);
    die2 = Math.floor(Math.random() * 6) + 1;
    console.log(die2);
    document.getElementById("die1res").innerHTML = die1;
    document.getElementById("die2res").innerHTML = die2;
    var sum = die1 + die2;
    console.log(sum);
        if (sum == 7 || sum == 11){
       document.getElementById("gameres").innerHTML = "Craps, you lose!!!";
       ++numLose
       document.getElementById("loseRes").innerHTML = numLose;
    }  else if (die1 == die2 && die1%2 == 0){
        document.getElementById("gameres").innerHTML = "Huzzah! You win!";
        ++numWin
       document.getElementById("winRes").innerHTML = numWin;
    } else{
       document.getElementById("gameres").innerHTML = "You did not win or lose! Please roll again";
       ++numTie
       document.getElementById("tieRes").innerHTML = numTie;
    }
}

function playTilWin(){
    console.log("play_craps() started");
    var numWin = 0;
    var numLose = 0;
    var numTie = 0;
    var i = 0;
    var die1;
    var die2;
    while(numWin == 0){
        i++
        die1 = Math.floor(Math.random() * 6) + 1;
        console.log(die1);
        die2 = Math.floor(Math.random() * 6) + 1;
        console.log(die2);
        document.getElementById("die1res").innerHTML = die1;
        document.getElementById("die2res").innerHTML = die2;
        var sum = die1 + die2;
        console.log(sum);
        if (sum == 7 || sum == 11){
            document.getElementById("gameres").innerHTML = "Craps, you lose!!!";
            ++numLose
            document.getElementById("loseRes").innerHTML = numLose;
        }  else if (die1 == die2 && die1%2 == 0){
            document.getElementById("gameres").innerHTML = "Huzzah! You win!";
            ++numWin
            document.getElementById("winRes").innerHTML = numWin;
        } else{
            document.getElementById("gameres").innerHTML = "You did not win or lose! Please roll again";
            ++numTie
            document.getElementById("tieRes").innerHTML = numTie;
        }
    }
    console.log("We Finally Got a Win!");
    console.log("It only took us " + i + " times to win.");
}
//disabling and enabling the start and stop buttons after click
function start(){
    console.log("start() function started");
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
}

function stop(){
    console.log("stop() function started");
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
    clearInterval(timer);
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}

function playMusic(){
    console.log("playMusic() started");
    mySound = new sound("us-lab-background.mp3")
    mySound.play();
}

function sound(srcFile){
    console.log("Sound class being used");
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "none");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}