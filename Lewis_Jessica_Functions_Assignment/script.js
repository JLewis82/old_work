/**
 * Created by MissJessica on 6/23/2015.
 */

    
//variables
var myLottoNum;
    myLottoNum = prompt ("Welcome! Would you like to see your lottery number for the Florida Lottery? y/n");



//functions
function lottoValidation (parameters) {
    var lottoValidation;
    lottoValidation = parameters.myLotto;
    var timesClicked = 1;

    while (lottoValidation === "") {
        lottoValidation = prompt("Dont leave this blank!\n\nPlease enter y/n:");

        timesClicked++;

        if (timesClicked === 10) {
            console.log("You have exceeded the amount of allowable clicks for this lottery.");
            break;
        }
    }
    return lottoValidation;


    //function to generate random numburs


//first way to generate numbers
    function lottofirst(parameters) {
        var values;
        var n = parameters.n;
        var min = parameters.min;
        var max = parameters.max;
        {
            values = [];
            var i = max;
            while (i >= min) values.push(i--);
            var results = [];
            var maxIndex = max;
            {
                do (i = 1; i <= n;
                i++
            )
                {
                    maxIndex--;
                    var index = Math.floor(maxIndex * Math.random());
                    results.push(values[index]);
                    values[index] = values[maxIndex];

                    return results;
                    function runmynbrs()
                    runmynbrs = true

                    do
                    {
                        if (confirm(lotto(8, 1, 100).sort(function (a, b) {
                                return a - b;
                            }))) {
                        } else {
                            runmynbrs = false;
                        }
                    } while (runmynbrs());
                    console.log("Here are your lottery numbers!");
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
