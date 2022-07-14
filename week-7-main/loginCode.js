function checkCreds(){
    console.log("checkCreds() started");
    //create needed variables
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;

    //move form data into variables
    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastname = document.getElementById("lName").value;
    console.log(lastName);
    fullName = firstName + " " + lastName;
    console.log(fullName);
    fullNameLength = fullName.length;
    console.log("The full name is " + fullNameLength + " characters long");
    badgeNumb = document.getElementById("badgeID").value;
    console.log(badgeNumb);
    //add firstName, " ", lastName into fullName

    //input validation
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Full name is invalid";
    } else if (badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML = "Badege number is invalid";
    } else{
        location.replace("./UATspace.html")
    }

    //if incorrect, present error in "loginStaus" div, else go to Alexander's Space Out Program

    
} 