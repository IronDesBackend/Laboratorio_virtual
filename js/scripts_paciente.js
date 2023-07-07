const boton = document.getElementById("boton");

//Eventos
boton.addEventListener("click", (e) => {
    e.preventDefault();
    validarPaciente();
    enviarP();
    // ListaPacientes();
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

var b = 0

//Expresiones regulares
const valName = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
const valLname = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?$/g;
const valCedula = /\d/g;
const valTel = /^(\d{10})$/g;
// const validacion = true;


// Validación datos Paciente
function validarPaciente () {

    let validacion = true;
    let alerta = 'Los siguientes parametros no son validos:\r\n'

    function validarNombre() {
        let NameP = document.getElementById('pa_name').value;

        if (!valName.test(NameP)) {
            validacion = false;
            alerta += "-Nombre\n";
            let error = document.getElementById('pa_name')
                // error.classList.add('warning')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                            error.style.border = 'solid 2px';
                            error.style.backgroundColor = 'white'
                        })
        } else {
            let error = document.getElementById('pa_name')
                //error.classList.remove('warning')
            error.removeEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return NameP;
    }

    validarNombre()
    // console.log(validacion)

    function validarApellido() {
        let LnameP = document.getElementById('pa_lastname').value;
        
        if (!valLname.test(LnameP)) {
            validacion = false;
            alerta += "-Apellido\n";
            let error = document.getElementById('pa_lastname')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('pa_lastname')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return LnameP;
    }

    validarApellido()
    // console.log(validacion)

    function validarCedula() {
        let CedulaP = document.getElementById('pa_cedula').value;
        
        if (!valCedula.test(CedulaP)) {
            validacion = false;
            alerta += "-Cédula\n";
            let error = document.getElementById('pa_cedula')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('pa_cedula')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return CedulaP;
    }

    validarCedula()
    // console.log(validacion)

    function validarEdad() {
        let EdadP = 
            new Date().getFullYear() - new Date(document.getElementById('edad').value).getFullYear();

        if (EdadP<1 || isNaN(EdadP)) {
            EdadP = 0;
            validacion = false;
            alerta += "-Fecha de nacimiento\n";
            let error = document.getElementById('edad')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('edad')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return EdadP;
    }

    validarEdad()
    // console.log(validacion)

    function validarTelefono() {
        let TelefonoP = document.getElementById('telefono').value;
        
        if (!valTel.test(TelefonoP)) {
            validacion = false;
            alerta += "-Telefono\n";
            let error = document.getElementById('telefono')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('telefono')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return TelefonoP;
    }

    validarTelefono()
    // console.log(validacion)

    function validarEspecialidad() {
        let EspecialidadP = document.getElementById('pa_especialidad').value;
        
        if (EspecialidadP === 'Especialidad') {
            validacion = false;
            alerta += "-Especialidad\n";
            let error = document.getElementById('pa_especialidad')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('pa_especialidad')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return EspecialidadP;
    }

    validarEspecialidad()
    // console.log(validacion)

    if (validacion === false) {
        alert(alerta + "Por favor, ingrese valores validos.")
        } else {
    
    const Persona = {
        Cedula : validarCedula(),
        Nombres : validarNombre(),
        Apellidos : validarApellido(),
        Edad : validarEdad(),
        Telefono : validarTelefono(),
        Especialidad : validarEspecialidad()
    };
    
    Pacientes.push(Persona);
    
    let jsonPacientes = JSON.stringify(Pacientes);
    let objPacientes = JSON.parse(jsonPacientes);
    generarLista(objPacientes)
}

}

//Lista de Pacientes
function generarLista(objPacientes) {
    let name_col = ['Cedula de Ciudadania', 'Nombres', 'Apellidos', 'Edad', 'Número de contacto', 'Especialidad requerida'];
    let lista_container = document.getElementById("lista")
        lista_container.classList.remove('lista_none')
        lista_container.classList.add('lista_style')
    
        let tabla_pacientes = document.createElement('table')
        let thead_pacientes = document.createElement('thead')
        let tbody_pacientes = document.createElement('tbody')


        function campos (a) {
            let tr_pacientes = document.createElement('tr')
            for (let x in a) {
                let th_pacientes = document.createElement('th')
                let cont = document.createTextNode(a[x])
                th_pacientes.appendChild(cont)
                tr_pacientes.appendChild(th_pacientes)
            }
            thead_pacientes.appendChild(tr_pacientes)
        }

        function registros () {
            for (let i in objPacientes) {
                let lis_paciente = objPacientes[i]
            
                for (let y = 0; y < 1; y++ ) {
                    let tupla = document.createElement('tr')

                    for (let z in lis_paciente) {
                        let celda = document.createElement("td");
                        let valor = document.createTextNode(lis_paciente[z])
                        celda.appendChild(valor)
                        tupla.appendChild(celda)
                    }
                    tbody_pacientes.appendChild(tupla)
                }
                b++
            }
            tabla_pacientes.appendChild(thead_pacientes)
            tabla_pacientes.appendChild(tbody_pacientes)
            lista_container.appendChild(tabla_pacientes)
        }

        if (b === 0){
            campos(name_col);
            registros()  
        } else {
            let tabla_desechable = document.getElementsByTagName('table')
            tabla_desechable[0].remove()

            campos(name_col);
            registros()
            }
}
  







function enviarP () {
    let form = document.querySelector('.paciente');
    form.reset();
}

//Ideas
// location.reload()