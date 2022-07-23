function getData(){
    console.log("getData() started");
    var loadedData = loadData();
    return loadedData;
}

function dataRow(legend, value, units){  //Loads an individual row within the coloumn of data
    msg = "<td>";
    msg += legend;
    msg += ": </td><td>";
    msg += value;
    msg += " " + units;
    msg += "</td>";
    return msg;
}

class InputData{
    constructor(                      //name the properties
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
        gyroZ
    ){                                                    //substantiate aka make real
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

function updateDisplay(){
    console.log("updateDisplay() started");
    theTime = new Date();

    //put the current time in the console for troubleshooting
    console.log(theTime.getHours() + ":" 
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":" 
    + (theTime.getSeconds() <10 ? "0" + theTime.getSeconds() : theTime.getSeconds())
    );

    //Put the current time in the display called "timeDisplay"
    document.getElementById("timeDisplay").innerHTML = (
    theTime.getHours() + ":"
    + (theTime.getMinutes() < 10 ? "0" + theTime.getMinutes() : theTime.getMinutes()) + ":"
    + (theTime.getSeconds() < 10 ? "0" + theTime.getSeconds() : theTime.getSeconds()));


//Need to make a variable to track time
var timeRead = data[index].time_seconds;

//Let's work on the table
if(timeRead >= 10){
    document.getElementById("data").rows["seconds"].innerHTML = 
        dataRow("Time Elapsed", data[index].time_seconds, "Seconds");
        document.getElementById("data").rows["latitude"].innerHTML = 
        dataRow("Latitude", data[index].latitude, "°");
        document.getElementById("data").rows["longitude"].innerHTML = 
        dataRow("Longitude", data[index].longitude, "°");
        document.getElementById("data").rows["gpsAltitude"].innerHTML = 
        dataRow("GPS Altitude", data[index].gps_altitude, "meters");
        document.getElementById("data").rows["bmpSensorAlt"].innerHTML = 
        dataRow("BMP Sensor Altitude", data[index].bmpSensor_altitude, "meters");
        document.getElementById("data").rows["bmpSensorPress"].innerHTML = 
        dataRow("BMP Sensor Pressure", data[index].bmpSensor_pressure, "barr");
        document.getElementById("data").rows["bmpSensorTemp"].innerHTML = 
        dataRow("BMP Sensor Temperature", data[index].bmpSensor_temp, "°C");
        document.getElementById("data").rows["digiSensorTemp"].innerHTML = 
        dataRow("Digital Sensor Temperature", data[index].digSensor_temp, "°C");
        document.getElementById("data").rows["cssSensorTemp"].innerHTML = 
        dataRow("CSS Sensor Temperature", data[index].cssSensor_temp, "°C");
        document.getElementById("data").rows["cssSensoreCO2"].innerHTML = 
        dataRow("CSS Sensor eCO2", data[index].cssSensor_eCO2, "ppm");
        document.getElementById("data").rows["cssSensorTVOC"].innerHTML = 
        dataRow("CSS Sensor TVOC", data[index].cssSensor_TVOC, "ppm");
        document.getElementById("data").rows["UV"].innerHTML = 
        dataRow("UV", data[index].UV, "");

        
}

    if(index < 500){
        index++;
    } else {
        index = 0;
    }
}