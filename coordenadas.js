        // Función para convertir coordenadas polares a rectangulares
        function polaresARectangulares(radio, angulo) {
            const anguloRad = angulo * (Math.PI / 180); // Convertir grados a radianes
            const x = radio * Math.cos(anguloRad);
            const y = radio * Math.sin(anguloRad);
            return { x: x, y: y };
        }

        // Función para convertir coordenadas rectangulares a polares
        function rectangularesAPolares(x, y) {
            const radio = Math.sqrt(x * x + y * y);
            const angulo = Math.atan2(y, x) * (180 / Math.PI); // Convertir radianes a grados
            return { radio: radio, angulo: angulo };
        }

        // Función para manejar la conversión de polares a rectangulares desde el formulario
        function webPolaresARectangulares() {
            const radio = parseFloat(document.getElementById("radio").value);
            const angulo = parseFloat(document.getElementById("angulo").value);
            const coordenadas = polaresARectangulares(radio, angulo);
            document.getElementById("resultado").innerHTML = `Coordenadas Rectangulares: x = ${coordenadas.x.toFixed(2)}, y = ${coordenadas.y.toFixed(2)}`;
        }

        // Función para manejar la conversión de rectangulares a polares desde el formulario
        function webRectangularesAPolares() {
            const x = parseFloat(document.getElementById("x").value);
            const y = parseFloat(document.getElementById("y").value);
            const coordenadas = rectangularesAPolares(x, y);
            document.getElementById("resultado").innerHTML = `Coordenadas Polares: radio = ${coordenadas.radio.toFixed(2)}, ángulo = ${coordenadas.angulo.toFixed(2)} grados`;
        }