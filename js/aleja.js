/*function ucitavanjeStranice() {
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
        }
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
*/

function ucitaj() {
    const inputDatoteke = document.getElementById("naziv");
    const forma = document.getElementById("formaObrazac");

    pocetakVremena();
    inputDatoteke.addEventListener("change", provjeriDatoteku);
    forma.addEventListener("submit", provjeriDatVrijeme);

}

var minute = 10;
var sekunde = 0;

var ispis = "";
var timer;

function pocetakVremena() {
    if(minute == 0 && sekunde == 0){
        minute = 10;
        sekunde = 0;
        osvjeziObrazac();
    }
    if(sekunde<0){
        sekunde = 59;
        minute--;
    }
    if(minute<10){
        ispis = "0" + minute + ":";
    }
    else{
        ispis = minute + ":";
    }
    
    if(sekunde<10){
        ispis += "0" + sekunde;
    }
    else{
        ispis += sekunde;
    }
    document.getElementById("vrijeme").innerHTML = ispis;
    sekunde--;
    timer = setTimeout("pocetakVremena()", 1000);
}

function osvjeziObrazac(){
    document.getElementById("formaObrazac").reset();
}



function provjeriDatoteku() {
    const inputDatoteke = document.getElementById("naziv");
    var naziv = inputDatoteke.value;
    var ekstenzija = naziv.substring(naziv.lastIndexOf('.')+1);
    var dopusteni_formati = ["pdf", "png", "jpg", "mp3", "mp4"];
    let velicina = inputDatoteke.files[0].size;
    velicina /= 1024*1024;
    if(dopusteni_formati.includes(ekstenzija) && velicina<1){
        
    }
    else{
        inputDatoteke.value = null;
    }
}

function provjeriDatVrijeme() {
    const inputDatVrijeme = document.getElementById("datvrijeme");

    let datumVrijeme = inputDatVrijeme.value;
    
    let datum = datumVrijeme.substring(0,11).split(".");

    if(datum[0] == null || datum[1] == null || datum[2] == null || datum[3] != ""){
        alert("Neispravan format datuma");
    }

    datumVrijeme.split(" ");
    let vrijeme = datumVrijeme.substring(12).split(":");

    if(vrijeme[0] == null || vrijeme[1] == null || vrijeme[2] == null || vrijeme[3] != null){
        alert("Neispravan format vremena");
    }

    if(datum[0][0]>3 || datum[0][0] < 0 ){

    }


    alert(datum[0] + " " + datum[1] + " " + datum[2] + " " + vrijeme[0] + " " + vrijeme[1] + " " + vrijeme[2] + " ")

}


document.addEventListener("DOMContentLoaded", ucitaj);
