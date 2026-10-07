function calcularPrecio(precioUnitario, cantidad) {
    const total = precioUnitario * cantidad;
    return total;
}
function puedeReservar(cantidad) {
    return cantidad > 0;
}
const botonReservar = document.querySelector("#botonReservar");
const contadorTazas = document.querySelector("#contadorTazas");

botonReservar.addEventListener("click", function () {
    const tazasActuales = Number(contadorTazas.textContent);

    if (puedeReservar(tazasActuales)) {
        contadorTazas.textContent = tazasActuales - 1;
        console.log("El usuario reservó una taza.");
    } else {
        botonReservar.textContent = "Sin cupos";
        botonReservar.disabled = true;
        console.log("No quedan tazas disponibles.");
    }
});