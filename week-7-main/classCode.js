class Mission{
    constructor(
        objective,
        launchDateDay,
        launchDateMonth,
        launchDateYear,
        spaceCraft,
        engineSerialNum,
        numAstronauts,
    ){
        this.objective = objective;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.spaceCraft = spaceCraft;
        this.engineSerialNum = engineSerialNum;
        this.numAstronauts = numAstronauts;
    }

    displayMissionParam(){
        console.log("displayMissionParam() started");
        alert("The spacecraft " + this.spaceCraft + " will liftoff on " + this.launchDateDay + this.launchDateMonth
        + this.launchDateYear + " and will be carrying " + this.numAstronauts + " astronauts.");
    }

    launch(){
        console.log("launch() started");
        alert(this.spaceCraft + " has launched");
    }
}

class Astronaut{
    constructor(
        fName,
        lName,
        age,
        sex,
        height,
    ){
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.sex = sex;
        this.height = height;
    }

    displayChar(){
        alert("Astronaut name is: " + this.fName + " " + this.lName + " and their age is: " + this.age);
    }

}

function fallLaunch(){
    console.log("fallLaunch() started");
    fallData.displayMissionParam();
}

function canDrink(person){
    if (person?.age != null){
        if(person.age < 18){
            console.log("Person cannot drink");
        } else if (person.age < 21){
            console.log("Person can drink outside of U.S.");
        } else {
            console.log("Person can consume alcohol");
        }
    } else {
        console.log("Person does not exist")
    }
}