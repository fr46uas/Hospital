var edadMaxima = document.getElementById('edadMaxima');
var edadMinima = document.getElementById('edadMinima');
var seccionPacientes = document.querySelector('#pacientes');

var diagnostico = document.querySelector('#selectdiagnostico');
diagnostico.addEventListener('change', cargarDiagnostico);

for (var i = 1; i <= 100; i++) {
    edadMaxima.innerHTML += '<option value="' + i + '">' + i + '</option>';
}

var btnEdad = document.querySelector('#btnEdad');

btnEdad.addEventListener('click', cargarEdades);

function cargarEdades(e) {

    var edadminima = parseInt(edadMinima.value);
    var edadmaxima = parseInt(edadMaxima.value);

    if (edadminima > edadmaxima) {
        alert('Valores introducidos incorrectos')
    }
    else {
        var listaEdades = filtrarPorEdad(listaDePacientes, edadminima, edadmaxima);
        pintarPacientes(listaEdades);
    }
}

function pintarPacientes(pLista) {
    var contenido = "<h2>" + pLista.length + " pacientes</h2>";

    pLista.forEach(paciente => {
        contenido += `<article id="paciente${paciente.id}">
                            <h3>${paciente.nombre}  ${paciente.apellido}</h3>
                            <ul>
                                <li>Diagnostico: ${paciente.diagnostico}</li>
                                <li>Edad: ${paciente.edad}</li>
                                <li>Seguridad Social: ${paciente.numeroSegSoc}</li>
                            </ul>
                        </article>`;
    })
    seccionPacientes.innerHTML = (pLista.length != 0) ? contenido : "<h3>NO HAY REGISTROS</h3>"
}
pintarPacientes(listaDePacientes);

function cargarDiagnostico(event) {
    var valorDiagnostico = event.target.value;

    if (valorDiagnostico != "") {

        var listaDiagnosticos = filtrarPorDiagnostico(listaDePacientes, valorDiagnostico);
        pintarPacientes(listaDiagnosticos);
    }
    else {
        alert('Por favor selecciona un diagnostico valido');
    }
}

/// SUPERFILTRO

var min = document.querySelector('#min');
var max = document.querySelector('#max');
var diag = document.querySelector('#diag');

var btnFiltroTotal = document.getElementById('filtrarTodo');

btnFiltroTotal.addEventListener('click', hacerSuperFiltro);

function hacerSuperFiltro() {
    //paso 1: quiero sacar con un alert cada uno de los valrores del filtro.
    // 3 alerts

    var eMinima = parseInt(min.value);
    var eMaxima = parseInt(max.value);
    var midiag = diag.value;

    if (midiag != "") {
        var listaSuperFiltro = filtrarPorEdad(filtrarPorDiagnostico(listaDePacientes, midiag), eMinima, eMaxima);

        pintarPacientes(listaSuperFiltro);
    }
    else {
        var listaEdades = filtrarPorEdad(listaDePacientes, eMinima, eMaxima);

        pintarPacientes(listaEdades);
    }


}

///FILTRAR POR APELLIDO


var miapellido = document.querySelector('#apellido')

var btnFiltrarApellido = document.getElementById('filtrarApellido');

btnFiltrarApellido.addEventListener('click', filtrarApe);

function filtrarApe(event) {

    var apellido = miapellido.value;
    apellido = apellido.toLowerCase();

    var arrayApellido = new Array();

    arrayApellido = apellido.split('');

    arrayApellido[0] = arrayApellido[0].toUpperCase()

    apellido = arrayApellido.join('');

    var listaFiltrarApellido = filtrarPorApellido(listaDePacientes, apellido);

    pintarPacientes(listaFiltrarApellido);


}