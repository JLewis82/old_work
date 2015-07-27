/**
 * Created by MissJessica on 6/23/2015.
 */

    
var yes;
yes = true;
var no;
no = false;
var myLottoNum;
    myLottoNum = prompt ("Welcome! Would you like to see your lottery number for the Florida Lottery? yes/no");




//functions
function(lottoValid)
{
    var lottoValidation;
    lottoValidation = "run";
    var timesClicked = 1;

    while (lottoValidation === "")
    {
        lottoValidation = prompt("Dont leave this blank! Please enter y/n:");

        timesClicked++;

        if (timesClicked === 10)
        {
            alert("You have exceeded the amount of allowable clicks for this lottery.");
            break;
        }
    }
    return lottoValidation;





    /* running a function to generate random numbers*/


//first way to generate numbers
    function lottofirst(parameters)
    {
        var n = parameters.n;
        var min = parameters.min;
        var max = parameters.max;
        var values;
        values = [];
        var i = max;

        do ((i = 1) (i <= n) (i++));
        while (i >= min);
        {
            values.push(i--);
            var results = [];
            var maxIndex = max;
            maxIndex--;
            var index = Math.floor(maxIndex * Math.random());
            results.push(values[index]);
            values[index] = values[maxIndex];
        }

        return results;


        function runmyNbrs()
        {
            runmyNbrs = true;

            if(confirm(lotto(8, 1, 100)))
            {
                sort(function (a, b))
                return (a - b);
            }

            else
            {
                runmyNbrs = false;
            }
            while(runmyNbrs())
            {
            alert("Here are your lottery numbers!");
            }
        }
    }
}


//simpler way to generate 6 random lottery numbers

    function yourLottoNbrs()
    {
        var nbr1, nbr2, nbr3, nbr4, nbr5, nbr6; //variables for 6 numbers
        {
            nbr1 = Math.floor(9 * Math.random());//random #1
            nbr2 = Math.floor(9 * Math.random());//random #2
            nbr3 = Math.floor(9 * Math.random());//random #3
            nbr4 = Math.floor(9 * Math.random());//random #4
            nbr5 = Math.floor(9 * Math.random());//random #5
            nbr6 = Math.floor(9 * Math.random());//random #6
            console.log("Your Lotto numbers for today are: " + nbr1 + " " + nbr2 + " " + nbr3 + " " +
                nbr4 + " " + nbr5 + " " + nbr6 + " .");

        }
    }
}
