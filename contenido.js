function baseDeDatos() {
    limpiarMenu();
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<h1>Paso a paso seguido</h1>";
    contenido.innerHTML += "<ol><li><p>Ingresamos a las bases de datos de la konrad</p><img id='base' src='Base de datos.png' alt='Pagina base de datos Konrad'></li><li><p>Ingresamos a Scopus</p><img id='scopus' src='Scopus.png' alt='Pagina de Scopus'></li></ol>";
    contenido.innerHTML += "<div id='anuncio'><p>Para continuar con el paso paso de click en Búsqueda</p></div>";
}
function busqueda() {
    limpiarMenu();
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<h1 id='busqueda-avanzada'>Búsqueda avanzada de artículos</h1>";
    contenido.innerHTML += "<ol><li><p>Nos fuimos al apartado de búsqueda avanzada y colocamos los siguientes parámetros</p><img id='avanzada' src='avanzada.png' alt='Busqueda avanzada en scopus'></li><li><p>Seleccionamos los tres articulos que más nos llamaron la atención, ejemplo:</p><img id='primer' src='primer articulo.png' alt='Primer articulo'><img id='segundo' src='segundo articulo.png' alt='Segundo articulo'><img id='tercero' src='tercer articulo.png' alt='Tercer articulo'></li><li><p>Luego procedimos a hacer las tablas, las cuales se pueden ver en el apartado de Tabla en el menú</p><img id='tabla' src='Tabla.png' alt='Tabla en el menú'></li></ol>";
}
function tabla() {
    limpiarContenido();
    limpiarMenu();
    let menu = document.getElementById("menu-tablas");
    menu.innerHTML += "<tr onclick='ivan()'><th scope='col'>Tabla Ivan</th></tr>";
    menu.innerHTML += "<tr onclick='danna()'><th scope='col'>Tabla Danna</th></tr>";
}
function limpiarMenu() {
    let menu = document.getElementById("menu-tablas");
    menu.innerHTML = "<tr class='table-active' onclick='baseDeDatos()'><th scope='row'>Base de datos</th></tr><tr class='table-active' onclick='busqueda()'><th scope='row'>Búsqueda</th></tr><tr class='table-active' onclick='tabla()'><th scope='row'>Tabla</th></tr>";
}
function limpiarContenido() {
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "";
}
function ivan() {
    limpiarContenido();
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<h1>Tabla de Ivan</h1>";
    contenido.innerHTML += "<table class='table'><thead><tr class='table-secondary'><th scope='row'>Nombre del estudiante</th><th>Base de datos</th><th>Cadena de Busqueda</th><th>Cantidad de documentos</th><th>Información bibliográfica</th></tr></thead><tbody><tr class='table-secondary'><td scope='row'>Ivan Dario Ruiz Bernal</td><td>Scopus</td><td>TITLE-ABS (\"Ciberseguridad\") OR TITLE-ABS (\"Ataque MAC\") AND LANGUAGE (\"Spanish\")</td><td>102 documentos encontrados</td><td><ul><li><img id='primera-cita' src='primera cita ivan.png' alt='primera cita hecha por Ivan'></li><li><img id='segunda-cita' src='segunda cita ivan.png' alt='segunda cita hecha por Ivan'></li><li><img id='tercera-cita' src='tercera cita ivan.png' alt='tercera cita hecha por Ivan'></li></ul></td></tr></tbody></table>";
    contenido.innerHTML += "<div id='listas'><h2>Palabras clave</h2><div id='primera-lista'><ul><li>cyber-crimes</li><li>data protection</li><li>data security</li><li>information security</li></ul></div><div id='segunda-lista'><ul><li>critical infrastructure</li><li>cyber-physical system</li><li>MoRCiTO reference model</li><li>operation technology</li><li>post-quantum cybersecurity</li></ul></div><div id='tercera-lista'><ul><li>Artificial Intelligence</li><li>Business Protection</li><li>Business Systems</li><li>Cyber Resilience</li><li>Cyber Threats</li><li>Cybersecurity</li></ul></div></div>";
}
function danna() {
    limpiarContenido();
    let contenido = document.getElementById("contenido");
    contenido.innerHTML = "<h1>Tabla de Danna</h1>";
    contenido.innerHTML += "<table class='table'><thead><tr class='table-secondary'><th scope='row'>Nombre del estudiante</th><th>Base de datos</th><th>Cadena de Busqueda</th><th>Cantidad de documentos</th><th>Información bibliográfica</th></tr></thead><tbody><tr class='table-secondary'><td scope='row'>Danna Michell Vega Romero</td><td>Scopus</td><td>TITLE-ABS (\"Ciberseguridad\") OR TITLE-ABS (\"Ataque MAC\") AND LANGUAGE (\"Spanish\")</td><td>102 documentos encontrados</td><td><ul><li><img id='primera-cita' src='primera cita danna.png' alt='primera cita hecha por Danna'></li><li><img id='segunda-cita' src='segunda cita danna.png' alt='segunda cita hecha por Danna'></li><li><img id='tercera-cita' src='tercera cita danna.png' alt='tercera cita hecha por Danna'></li></ul></td></tr></tbody></table>";
    contenido.innerHTML += "<div id='listas'><h2>Palabras clave</h2><div id='primera-lista'><ul><li>cyber-attack</li><li>cyber-threat</li><li>maritime industry</li><li>risks</li><li>vessels</li></ul></div><div id='segunda-lista'><ul><li>Assurance</li><li>Audit Guide</li><li>Compliance</li><li>Cybersecurity Audit</li><li>Cybersecurity Enhancement</li><li>Implementation</li><li>Monitoring</li><li>Systematic Literature Review</li></ul></div><div id='tercera-lista'><ul><li>Cyber threats</li><li>Cybersecurity</li><li>IoT</li><li>Smart Home</li></ul></div></div>";

}