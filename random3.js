/**
 * Created by Miss_Jessica_Lynne on 6/24/15.
 */

    function lotto(n, min, max)
{
    var values = [];
    var i = max;
        while(i >= min) values.push(i--);
        var results = [];
        var maxIndex = max;
        for(i=1; i <= n; i++)
        {
            maxIndex--;
            var index = Math.floor(maxIndex * Math.random());
            results.push(values[index]);
            values[index] = values[maxIndex];
        }
        return results;
    }


    function go()
    {
    var running = true;
    do
    {
        if(!confirm(lotto(8, 1, 100).sort(function(a,b){return a - b;}))){
            running = false;
        }
    }while(running)
}
