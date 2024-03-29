//The playCraps function allows the website viewer to roll two die.
//When the user rolls two die with the same value, they win.
//If the user rolls two die with a value that adds up to 7 or 11, they lose.
//If the user rolls two die with a different outcome than the two already mentioned, it results in a draw.
function playCraps() {
    console.log("playCraps() started");
    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);
    var sum = die1 + die2;
    document.getElementById("die1Res").innerHTML = die1;
    document.getElementById("die2Res").innerHTML = die2;
    document.getElementById("sum1Res").innerHTML = sum;
    if (sum == 7 || sum == 11) {
        document.getElementById("finalRes").innerHTML = "CRAPS - you lose";
    }
    else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finalRes").innerHTML = "DOUBLES - you win";
    } else {
        document.getElementById("finalRes").innerHTML = "Draw - you did not win or lose, please try agian.";
    }
}

//This blastOff function is the same one that we had in the HTML originally
//but now its it is in an external .js file and now only runs when pressing the start button.
function blastOff() {
    var currTime = 50;
    document.getElementById("countDownTimer").innerHTML = currTime
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 5000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 10000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 15000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 20000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 25000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 30000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 35000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 40000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = currTime
    }, 45000);
    setTimeout(function () {
        currTime = currTime - 5;
        document.getElementById("countDownTimer").innerHTML = "Blastoff!"
    }, 50000);
}

//This is the new and improved blast off function that takes up less space
//and uses for, if, and else to create a "smarter" function.
function btrBlastOff() {
    console.log("btrBlastOff() started");
    debugger;
    var currTime = 50;
    for (var i = 0; i < 10; i = i + 1) {
        console.log(i);
        setTimeout(function () {
            if(currTime > 20){
                debugger;
                document.getElementById("countDownTimer").innerHTML = currTime;
            }else {
                document.getElementById("countDownTimer").innerHTML = 
                "Warning Less than ½ way to launch, time left = " + currTime;
            }
            currTime = currTime - 5;
        }, 5000 * i);
    }
        setTimeout(function () {
            document.getElementById("countDownTimer").innerHTML = "Blastoff!";
        }, 50000);
    }

function start(){
    console.log("start() function started");
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    index = 0;
    timer = setInterval(updateDisplay, time_interval);
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

function stop(){
    console.log("stop() function started");
    clearInterval(timer);
    document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}

//function to load and display data
function updateDisplay() {
    console.log("Display time: " + theTime.getHours()  
    + ":" +(theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" +(theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));
    theTime = new Date;
    var timeRead =data[index].time_seconds;

    if(timeRead >= 10){
        document.getElementById("data").rows["seconds"].innerHTML = dataRow("Time Elapsed", data[index].time_seconds, "seconds");
        document.getElementById("data").rows["latitude"].innerHTML = dataRow("Latitude", data[index].latitude, " ");
        document.getElementById("data").rows["longitude"].innerHTML = dataRow("Longitude", data[index].longitude, " ");
        document.getElementById("data").rows["gps_altitude"].innerHTML = dataRow("GPS altitude", data[index].gps_altitude, " ");
        document.getElementById("data").rows["bmpSensor_altitude"].innerHTML = dataRow("BMP altitude", data[index].bmpSensor_altitude, " ");
        document.getElementById("data").rows["bmpSensor_pressure"].innerHTML = dataRow("BMP pressure", data[index].bmpSensor_pressure, " ");
        document.getElementById("data").rows["bmpSensor_temp"].innerHTML = dataRow("BMP temperature", data[index].bmpSensor_temp, " ");
        document.getElementById("data").rows["digSensor_temp"].innerHTML = dataRow("Digital temperature", data[index].digSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_temp"].innerHTML = dataRow("CSS temperature", data[index].cssSensor_temp, " ");
        document.getElementById("data").rows["cssSensor_eCO2"].innerHTML = dataRow("CSS eCO2", data[index].cssSensor_eCO2, " ");
        document.getElementById("data").rows["cssSensor_TVOC"].innerHTML = dataRow("CSS TVOC", data[index].cssSensor_TVOC, " ");
        document.getElementById("data").rows["UV"].innerHTML = dataRow("UV", data[index].UV, " ");
        document.getElementById("data").rows["accelX"].innerHTML = dataRow("accelX", data[index].accelX, " ");
        document.getElementById("data").rows["accelY"].innerHTML = dataRow("accelY", data[index].accelY, " ");
        document.getElementById("data").rows["accelZ"].innerHTML = dataRow("accelZ", data[index].accelZ, " ");
        document.getElementById("data").rows["magneticX"].innerHTML = dataRow("magneticX", data[index].magneticX, " ");
        document.getElementById("data").rows["magneticY"].innerHTML = dataRow("magneticY", data[index].magneticY, " ");
        document.getElementById("data").rows["magneticZ"].innerHTML = dataRow("magneticZ", data[index].magneticZ, " ");
        document.getElementById("data").rows["gyroX"].innerHTML = dataRow("gyroX", data[index].gyroX, " ");
        document.getElementById("data").rows["gyroY"].innerHTML = dataRow("gyroY", data[index].gyroY, " ");
        document.getElementById("data").rows["gyroZ"].innerHTML = dataRow("gyroZ", data[index].gyroZ, " ");
        document.getElementById("clockTime").innerHTML = "Display time: " + theTime.getHours()  
    + ":" +(theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes())
    + ":" +(theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds());
    theTime = new Date;
        if (index < 500){
            index++;
        } else {
            index = 0;
        }
    }
}

function getData(){
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

function playStation(){
    console.log("playStation() started");
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function sound(src){
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "audio");
    //this.sound.setAttribute("controls", "none");
    //this.sound.style.display = "none";
    //document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}

function playStar(){
    console.log("playStar() started");
    mySound = new sound("ShootingStarSummit.mp3");
    mySound.play();
}

class InputData {
    constructor(
        time_seconds,
        latitude,
        longitude,
        gps_altitude,
        bmpSensor_altitude,
        bmpSensor_pressure,
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssSensor_eCO2,
        cssSensor_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
    ){
        this.time_seconds = time_seconds;
        this.latitude = latitude;
        this.longitude = longitude;
        this.gps_altitude = gps_altitude;
        this.bmpSensor_altitude = bmpSensor_altitude;
        this.bmpSensor_pressure = bmpSensor_pressure;
        this.bmpSensor_temp = bmpSensor_temp;
        this.digSensor_temp = digSensor_temp;
        this.cssSensor_temp = cssSensor_temp;
        this.cssSensor_eCO2 = cssSensor_eCO2;
        this.cssSensor_TVOC = cssSensor_TVOC;
        this.UV = UV;
        this.accelX = accelX;
        this.accelY = accelY;
        this.accelZ = accelZ;
        this.magneticX = magneticX;
        this.magneticY = magneticY;
        this.magneticZ = magneticZ;
        this.gyroX = gyroX;
        this.gyroY = gyroY;
        this.gyroZ = gyroZ;
    }
}