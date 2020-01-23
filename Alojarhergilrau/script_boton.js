
function cuantosClicks() { 
    if(typeof(Storage) !== "undefined") { 
        if (localStorage.cuentadeclicks) {
            
            localStorage.cuentadeclicks = Number(localStorage. cuentadeclicks)+30; 
        } else { 
            localStorage.cuentadeclicks = 30; 
        } 
        document.getElementById("parrafo_hergilrau").innerHTML = "Has almacenado: " + localStorage.cuentadeclicks + " en esta sesión."; 
    } else { 
        document.getElementById("parrafo_hergilrau").innerHTML = "El navegador no soporta almacenamiento local"; 
    }
}
function cuantosx7Clicks() { 
    if(typeof(Storage) !== "undefined") { 
        if (sessionStorage.cuentax7clicks) {
            
            sessionStorage.cuentax7clicks = Number(sessionStorage.cuentax7clicks)*7; 
        } else { 
            sessionStorage.cuentax7clicks = 7; 
        } 
        document.getElementById("parrafo2_hergilrau").innerHTML = "Has almacenado: " + sessionStorage.cuentax7clicks + " en esta sesión."; 
    } else { 
        document.getElementById("parrafo2_hergilrau").innerHTML = "El navegador no soporta almacenamiento local"; 
    }
}

function play22() {
    var audio = document.getElementById('audio_hergilrau');
    if (audio.paused) {
        audio.play();
    }else{
        audio.currentTime = 0
    }
}