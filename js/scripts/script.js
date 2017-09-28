

let theTotal = 0;
let addButton = 1;
let autoButtons = 0;
let saveIt = true;

let addButt = () => {
    theTotal = theTotal + addButton;
    colorCheck();
    $('#total').text("Total: "+theTotal.toFixed(2));
}
let multiButt = () => {
    if (theTotal > 10) {
        theTotal = theTotal - 10;
        addButton = addButton * 1.2;
        $("#button").text("+" + addButton.toFixed(2));
        $("#total").text("Total: " + theTotal.toFixed(2));
    } 
    colorCheck();
}
let autoButt = () => {
    if (theTotal>=100) {
        theTotal = theTotal - 100;
        setInterval(addButt, 1000);
        autoButtons++;
        $("#autoCounter").text("Autocounters: " + autoButtons); 
    }
    colorCheck();
}
let colorCheck = () => {
    if (theTotal < 100) 
        $("#autoButton").css("background-color", "gray");
    else 
        $("#autoButton").css("background-color", "white");
    if (theTotal < 10) 
        $("#multButton").css("background-color", "gray"); 
    else
        $("#multButton").css("background-color", "white");
}
$(document).ready(function(){
    $("#button").click(() => {
        addButt();
        $('#total').text("Total: "+theTotal.toFixed(2));
    });
});
$(document).ready(function(){
    $("#multButton").click(() => {
        multiButt();
    });
});
$(document).ready(function(){
    $("#autoButton").click(() => {
        autoButt();
    });
});




$(document).ready(function(){
    $("#clear").click(() => {
        theTotal = 0;
        autoButtons = 0;
        addButton = 1;
        $('#total').text("Total: "+theTotal.toFixed(2));
        $("#button").text("+" + addButton.toFixed(2));
        $("#autoCounter").text("Autocounters: " + autoButtons); 
        document.cookie = 'total=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path';
        document.cookie = 'autos=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path';
        document.cookie = 'add=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path';
        saveIt = false;
        location.reload();

    });
});
let autoButtRestart = (count) => {
    for (let i = 0; i < count; i++) {
        setInterval(addButt, 1000);
    }
    document.cookie = 'autos=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path';       
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
$(document).ready(function(){
    theTotal = Number(getCookie('total'));
    autoButtons = Number(getCookie('autos'));
    addButton = Number(getCookie('add'));
    if (addButton===0) addButton = 1;
    $('#total').text("Total: "+theTotal.toFixed(2));
    $("#button").text("+" + addButton.toFixed(2));
    $("#autoCounter").text("Autocounters: " + autoButtons); 
    autoButtRestart(autoButtons);
    if (theTotal > 10)
        $("#multButton").css("background-color", "white");
    if(theTotal > 100)
        $("#autoButton").css("background-color", "white");
});
$(window).on('beforeunload', function() {
    if (saveIt) {
        var d = new Date();
        d.setTime(d.getTime() + (1000000));
        let expiration = 'expires=' + d.toUTCString();
        document.cookie = 'total=' + theTotal + ';' + expiration + ';path';
        document.cookie = 'autos=' + autoButtons + ';' + expiration + ';path'; 
        document.cookie = 'add=' + addButton + ';' + expiration + ';path'; 

    }    
});