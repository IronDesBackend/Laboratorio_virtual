//Boton de envio
const boton = document.getElementById("boton");

//Eventos
boton.addEventListener("click", (e) => {
    e.preventDefault();
    validarPaciente();
    enviarP();
});

//Variables del Paciente
let NameP = document.getElementById('pa_name').value;
let LnameP = document.getElementById('pa_lastname').value;
let CedulaP = document.getElementById('pa_cedula').value;
let EdadP = 
    new Date().getFullYear() - new Date(document.getElementById('edad').value).getFullYear();
let TelefonoP = document.getElementById('telefono').value;
let EspecialidadP = document.getElementById('pa_especialidad').value;

const Pacientes = [];
let enlista = 0;

//Expresiones regulares
const valName = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
const valLname = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?$/g;
const valCedula = /\d/g;
const valTel = /^(\d{10})$/g;

//Validación datos Paciente
function validarPaciente () {

    let validacion = true;
    let alerta = 'Los siguientes parametros no son validos:\r\n';

    function validarNombre() {
        let NameP = document.getElementById('pa_name').value;

        if (!valName.test(NameP)) {
            validacion = false;
            alerta += "-Nombre\n";
            let error = document.getElementById('pa_name');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        })
        } if (valName.test(NameP)) {
            let error = document.getElementById('pa_name');
                error.classList.add("normal");
        }
        return NameP;
    }

    validarNombre();

    function validarApellido() {
        let LnameP = document.getElementById('pa_lastname').value;
        
        if (!valLname.test(LnameP)) {
            validacion = false;
            alerta += "-Apellido\n";
            let error = document.getElementById('pa_lastname');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        })
        } if (valLname.test(LnameP)) {
            let error = document.getElementById('pa_name');
                error.classList.add("normal");
        }
        return LnameP;
    }

    validarApellido();

    function validarCedula() {
        let CedulaP = document.getElementById('pa_cedula').value;
        
        if (!valCedula.test(CedulaP)) {
            validacion = false;
            alerta += "-Cédula\n";
            let error = document.getElementById('pa_cedula');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        })
        } if (valCedula.test(CedulaP)) {
            let error = document.getElementById('pa_name');
                error.classList.add("normal");
        }
        return CedulaP;
    }

    validarCedula();

    function validarEdad() {
        let EdadP = 
            new Date().getFullYear() - new Date(document.getElementById('edad').value).getFullYear();

        if (EdadP<1 || isNaN(EdadP)) {
            EdadP = 0;
            validacion = false;
            alerta += "-Fecha de nacimiento\n";
            let error = document.getElementById('edad');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        });
        }
        return EdadP;
    }

    validarEdad();

    function validarTelefono() {
        let TelefonoP = document.getElementById('telefono').value;
        
        if (!valTel.test(TelefonoP)) {
            validacion = false;
            alerta += "-Telefono\n";
            let error = document.getElementById('telefono');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        })
        } if (valTel.test(TelefonoP)) {
            let error = document.getElementById('pa_name');
                error.classList.add("normal");
        }
        return TelefonoP;
    }

    validarTelefono();

    function validarEspecialidad() {
        let EspecialidadP = document.getElementById('pa_especialidad').value;
        
        if (EspecialidadP === 'Especialidad') {
            validacion = false;
            alerta += "-Especialidad\n";
            let error = document.getElementById('pa_especialidad');
                error.classList.remove("normal");
                error.classList.add('warning');
                    error.addEventListener('input',() => {
                        error.classList.remove('warning');
                        error.classList.add("normal");
                        })
        }
        return EspecialidadP;
    }

    validarEspecialidad();

    //Ultima validación de campos llenos
    if (validacion === false) {
        alert(alerta + "Por favor, ingrese valores validos.");
        } else {
            //Creacion del objeto Persona
            const Persona = {
                Cedula : validarCedula(),
                Nombres : validarNombre(),
                Apellidos : validarApellido(),
                Edad : validarEdad(),
                Telefono : validarTelefono(),
                Especialidad : validarEspecialidad()
            };

            //Envio de Persona al arreglo Pacientes
            Pacientes.push(Persona);
    
            //Transformación de Pacientes a json_Pacientes
            let jsonPacientes = JSON.stringify(Pacientes);

            //Transformación del json_Pacientes a objPacientes
            let objPacientes = JSON.parse(jsonPacientes);
            generarLista(objPacientes)
}


}

//Lista de Pacientes
function generarLista(objPacientes) {
    //Etiquetas del objPacientes
    let name_col = ['Cedula de Ciudadania', 'Nombres', 'Apellidos', 'Edad', 'Número de contacto', 'Especialidad requerida'];

    //Creación de la lista
    let lista_container = document.getElementById("lista");
        lista_container.classList.remove('lista_none');
        lista_container.classList.add('lista_style');
    
        let tabla_pacientes = document.createElement('table');
        let thead_pacientes = document.createElement('thead');
        let tbody_pacientes = document.createElement('tbody');
        thead_pacientes.classList.add('pac_th');
        tbody_pacientes.classList.add('pac_tr');

        //Creación de los campos de la lista
        function campos (a) {
            let tr_pacientes = document.createElement('tr');
            for (let x in a) {
                let th_pacientes = document.createElement('th');
                let cont = document.createTextNode(a[x]);
                th_pacientes.appendChild(cont);
                tr_pacientes.appendChild(th_pacientes);
            }
            thead_pacientes.appendChild(tr_pacientes);
        }

        //Creación de los registros o tuplas de la lista
        function registros () {
            for (let i in objPacientes) {
                let lis_paciente = objPacientes[i];
                for (let y = 0; y < 1; y++ ) {
                    let tupla = document.createElement('tr');
                    for (let z in lis_paciente) {
                        let celda = document.createElement("td");;
                        let valor = document.createTextNode(lis_paciente[z]);
                        celda.appendChild(valor);
                        tupla.appendChild(celda);
                    }
                    tbody_pacientes.appendChild(tupla);
                }
                enlista++
            }
            tabla_pacientes.appendChild(thead_pacientes);
            tabla_pacientes.appendChild(tbody_pacientes);
            lista_container.appendChild(tabla_pacientes);
        }

        //Llenado de la lista y eliminación de listas antiguas
        if (enlista === 0){
            campos(name_col);
            registros();
        } else {
            let tabla_desechable = document.getElementsByTagName('table');
            tabla_desechable[0].remove();

            campos(name_col);
            registros();
            }
}

//Reinicio de formulario
function enviarP () {
    let form = document.querySelector('.paciente');
    form.reset();
}
