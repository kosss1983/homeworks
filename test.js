
$(function () {

    var count = 100;

    document.getElementById("button").addEventListener("click", function () {
        count = 100;
        
        moveBall();
    });

    function moveBall()
    {
        if (count >= 500) {
            clearTimeout(idTimer);
            return;
        }
        
        count += 1;
        document.getElementById("text").innerHTML = count + ' px';
        
        var idTimer = setTimeout(function () {
            document.getElementById("ball").style.left = count + "px";
            moveBall();
        }, 50);
    }
});
