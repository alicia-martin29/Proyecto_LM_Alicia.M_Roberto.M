/* Esta función muestra el popup solo si el usuario aún no ha elegido */
function comprobarCookies() {
    let decision = localStorage.getItem("decisionCookies");

    if (decision === null) {
        document.getElementById("cookiePopup").style.display = "block";
        document.getElementById("cookieOverlay").style.display = "block";
    }
}

/* Guarda que el usuario acepta las cookies */
function aceptarCookies() {
    localStorage.setItem("decisionCookies", "aceptadas");
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("cookieOverlay").style.display = "none";
}

/* Guarda que el usuario rechaza las cookies */
function rechazarCookies() {
    localStorage.setItem("decisionCookies", "rechazadas");
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("cookieOverlay").style.display = "none";
}

/* Cierra el popup con la X */
function cerrarPopup() {
    document.getElementById("cookiePopup").style.display = "none";
    document.getElementById("cookieOverlay").style.display = "none";
}

/* Al cargar la página, comprueba si ya se tomó una decisión */
window.onload = comprobarCookies;