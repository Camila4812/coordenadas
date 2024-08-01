// Función para convertir coordenadas polares a rectangulares
function polaresARectangulares() {
    const radio = parseFloat(document.getElementById("radio").value);
    const angulo = parseFloat(document.getElementById("angulo").value) * (Math.PI / 180); // Convertir grados a radianes
    const x = radio * Math.cos(angulo);
    const y = radio * Math.sin(angulo);
    document.getElementById("resultado").innerHTML = `Coordenadas Rectangulares: x = ${x.toFixed(2)}, y = ${y.toFixed(2)}`;
}

// Función para convertir coordenadas rectangulares a polares
function rectangularesAPolares() {
    const x = parseFloat(document.getElementById("x").value);
    const y = parseFloat(document.getElementById("y").value);
    const radio = Math.sqrt(x * x + y * y);
    const angulo = Math.atan2(y, x) * (180 / Math.PI); // Convertir radianes a grados
    document.getElementById("resultado").innerHTML = `Coordenadas Polares: radio = ${radio.toFixed(2)}, ángulo = ${angulo.toFixed(2)} grados`;
}