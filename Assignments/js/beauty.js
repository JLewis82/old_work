/**
 * Created by Miss_Jessica_Lynne on 6/16/15.
 */

/*greeting using ternary*/
var now;
now = new Date();
var myGreeting;
myGreeting = "Good" + ((now.getHours() > 17) ? " evening." : " day.");

/*Name input using confirm */
var name;
name = prompt("Please enter your name");

// confirm will return true if ok is clicked and false if cancel is clicked
name = confirm("Is" + name + "correct? Ok for True, Cancel for False");
if (name)
    alert("Wonderful, lets begin shall we");
else
    alert("Ok, lets try this again");


/* users age using 'if' conditional statement */
var age;
age = prompt("Welcome to your assessment. Please enter your age", "");

if ((age < 18) || (age >= 50))
//if age is younger than 18 or older than 50 = true
{
    console.log("You are still a spring chicken!");
}

if ((age >= 50))
//if age is 50 or older than condition is false
{
    console.log("Wow! You look great for" + age)
}


/* the weather using if/else */

var theWeather;
theWeather = prompt("Is it raining outside? Click true for its raining, otherwise Sunny for False");

//confirm if entry correct
    theWeather = confirm("It is" + theWeather + "outside, correct? Ok for True, Cancel for False");

    if (theWeather == true)
    {
        console.log("Don't forget your umbrella!");
    }
    else {
        console.log("Don't forget your sunglasses!");
    }


    /* temperature using if with && */


    var theTemperature;
    theTemperature = prompt("Enter enter the current temperature", "");


    if (theTemperature <= 30)
    {
        console.log("Wow! now that is cold!");
    }

    if ((theTemperature > 30) && (theTemperature <= 55))
    {
        console.log("It is a cool day");
    }

    if ((theTemperature > 55) && (theTemperature <= 75))
    {
        console.log = ("It is a fairly warm day");
    }

    if ((theTemperature > 75))
    {
        console.log("Wow! It is very hot today!");
    }


/*input email*/

var email;
email = prompt("Please enter your email address.");
email = confirm("Is this" + email + " correct? Ok for true, cancel if false.");
if (email == true)
{
    console.log("Yes this is your email address!")
}



/* The weather using ternary conditional if/else */

    console.log("It is " + (theTemperature >= 90 ? "HOT!" : (theTemperature > 50 ? "NICE!" : "COLD!"));
/**
 * Created by Miss_Jessica_Lynne on 6/17/15.
 */
