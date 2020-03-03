/* paciente1 = {
    'id': 0,
    'nombre': 'Juan',
    'apellido': 'Perez',
    'diagnostico': 'Fiebre',
    'edad': 37,
    'numeroSegSoc': 'A374132941',
    'especialistas': ['otorrino', 'traumatologo', 'general'] */

function filtrarPorEdad(pListaPacientes, pEdadMinima, pEdadMaxima, pDonde = "dentro") {

    var listaFiltrada = new Array();

    listaFiltrada = pListaPacientes.filter(function (paciente) {
        if (pDonde == "dentro") {

            return (paciente.edad >= pEdadMinima && paciente.edad <= pEdadMaxima)
        } else {

            return (paciente.edad < pEdadMinima || paciente.edad > pEdadMaxima)
        }
    })

    return (listaFiltrada);
}

function filtrarPorDiagnostico(pListaPacientes, pDiagnostico) {
    var listaFiltrada = new Array();
    for (paciente of pListaPacientes) {
        if (paciente.diagnostico == pDiagnostico) {
            listaFiltrada.push(paciente);
        }
    }
    return listaFiltrada;
}

function filtrarSSGG(pListaPacientes, pDigito) {

    var listaFiltrada = new Array();

    listaFiltrada = pListaPacientes.filter(paciente => {

        var longitud = paciente.numeroSegSoc.length;
        var ultimoDigito = paciente.numeroSegSoc[longitud - 1]
        return (ultimoDigito == pDigito);
    })

    return listaFiltrada;

}

function filtrarPorApellido(pListaPacientes, pApellido) {
    var listaFiltrada = new Array();
    for (paciente of pListaPacientes) {
        if (paciente.apellido == pApellido) {
            listaFiltrada.push(paciente);
        }
    }
    return listaFiltrada;
}

//OPCION 1

/* 
function filtrarPorEspecialista(pListaPacientes, pEspecialista) {

    var listaFiltrada = new Array();

    for (paciente of pListaPacientes) {

        for (especialista of paciente.especialistas) {

            if (especialista == pEspecialista) {

                listaFiltrada.push(paciente);

            }
        }
    }
    return listaFiltrada;
} */

// OPCION 2

function filtrarPorEspecialista(pListaPacientes, pEspecialista) {

    var listaFiltrada = new Array();
    var listaFiltrada = pListaPacientes.filter(
        paciente => paciente.especialistas.include(pEspecialista)
    )
    return listaFiltrada;
}


var listaFiltradaFinal = filtrarPorEdad(filtrarPorDiagnostico(listaDePacientes, 'Gripe'), 0, 20);

/* console.log(listaFiltradaFinal); */


/* 
function filtrarPorEdadyDiagnostico(pListaPacientes, pEdad, pDiagnostico) {

    var listaFiltrada = new Array();

    for (paciente of pListaPacientes) {

        if (paciente.diagnostico == pDiagnostico && paciente.edad <= pEdad) {

            listaFiltrada.push(paciente);
        }

    }
    console.log(listaFiltrada)
    return listaFiltrada;

} */

/* filtrarPorEdadyDiagnostico(listaDePacientes, 20, "Gripe") */

var miGranLista = listaDePacientes.concat(listaDePacientes).concat(listaDePacientes);


