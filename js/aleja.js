function ucitavanjeStranice() {
    pokreniTimer();
    var formaPrijava = document.getElementById("formaPrijava");
    formaPrijava.addEventListener("submit", function(event){
        /*alert("Broj elemenata je: " + formaPrijava.length);
        if(document.getElementById("ime").value == ""){
            alert("Ime je prazno");
        }
        else if(document.getElementById("lozinka").value == ""){
            alert("Lozinka je prazna");
        }
        else {
            alert("Unijeli ste sve podatke!");
        }*/
        document.getElementById("greske").innerHTML = "";
        for (var i in formaPrijava){
            if(formaPrijava[i].value === ""){
                document.getElementById("greske").innerHTML +=  formaPrijava[i].id + " je prazno!<br>";
                formaPrijava[i].style = "color: white; background-color: salmon;";
            }
            event.preventDefault();
        }
    }
);
    console.log(formaPrijava);
}

document.addEventListener("DOMContentLoaded", ucitavanjeStranice);

var sekunde = 0;
var minute = 0;
var vrijeme = "";
var timer;

function pokreniTimer() {
    sekunde++;
    minute = (sekunde>59?minute++:minute);
    if(sekunde>59){
        sekunde = 0;
    }
    if(minute<10){
        vrijeme = "0" + minute + ":";
    }
    else{
        vrijeme = minute + ":";
    }
    
    if(sekunde<10){
        vrijeme += "0" + sekunde;
    }
    else{
        vrijeme += sekunde;
    }
    document.getElementById("timer").innerHTML = vrijeme;
    timer = setTimeout("pokreniTimer()", 1000);
}

function zaustaviTimer(){
    clearTimeout(timer);
}

