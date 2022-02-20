function atalakit(){
    let milyen = document.getElementsByName("milyen").value
    if (document.getElementById("szoveg") === ''){
        alert("Nem írt be szöveget!")
    }
    if (milyen === ''){
        alert("Nem választott funkciót!")
    }
    if (document.getElementById("kisbetus").checked){
        document.getElementById("eredmeny").innerHTML = document.getElementById("szoveg").value.toLowerCase();
    }
    else if (document.getElementById("nagybetus").checked){
        document.getElementById("eredmeny").innerHTML = document.getElementById("szoveg").value.toUpperCase();
    }
}

// a hibaüzeneteket sehogy nem tudom megjeleníttetni