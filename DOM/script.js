alert("Hallo wereld");
document.getElementById("title").style.color = "red";

var getal1 = 12;
var getal2 = 4;
var som = getal1 * getal2;
alert(getal1 + " x " + getal2 + " = " + som);


// promptbox
var kleur = prompt("Geef een Engelse kleurnaam: (red of blue", "");   

// kleur aanpassen
document.getElementById("title").style.color = kleur;
//document.getElementById("title").style.color = "red";

//tekst aanpassen
document.getElementById("p1").innerHTML= "Hello "+ kleur +"!";