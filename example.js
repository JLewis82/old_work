/**
 * Created by Miss_Jessica_Lynne on 6/11/15.
 */
/**
 * Created by MissJessica on 6/8/2015.


 /*  Jessica L Lewis
 SDI 1506
 Variables, prompts, and outputs
 */

//alert("Javascript Works!");
function calculateTip(amount) {
    var tax = amount * .0825;
    var tip = amount * .18;
    console.log += "<li>Tax: $" + tax + "</li>";
    console.log += "<li>Tip: $" + tip + "</li>";
    console.log += "<li>Total Bill: " + (tax + tip + amount) + "</li>";
}

calculateTip(120);
