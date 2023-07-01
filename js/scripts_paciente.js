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
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('pa_name')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
                console.log(NameP)
            })
        }
        return NameP;
    }
    
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
                        console.log(EspecialidadP)
                    })
        } else {
            let error = document.getElementById('pa_especialidad')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
                console.log(EspecialidadP)
            })
        }
        return EspecialidadP;
    }
console.log(validacion)
    validarNombre()
    validarApellido()
    validarCedula()
    validarEdad()
    validarTelefono()
    validarEspecialidad()

    if (validacion === false) {
        alert(alerta + "Por favor, ingrese valores validos.")
        } else {
        
        // let inputs = document.querySelector('.inputs')
        // //console.log(inputs)
        //     error.style.border = 'solid 2px'
        //     error.style.backgroundColor = 'white'
        

        const Persona = {
            Nombres : validarNombre(),
            Apellidos : validarApellido(),
            Cedula : validarCedula(),
            Edad : validarEdad(),
            Telefono : validarTelefono(),
            Especialidad : validarEspecialidad(),
        };
            // console.log(Persona)

            let  jsonPaciente = JSON.stringify(Persona);
            console.log(jsonPaciente)
            
            //console.log(Pacientes);
            Pacientes.push(jsonPaciente);
        }

    
    console.log(validacion)
    //console.log(jsonPaciente)
    console.log(Pacientes)

    // function prueba01 () { console.log("estoy imprimiendo la validacion " + validacion)}
    // setInterval(prueba01, 5000)
}


function enviarP () {
    let form = document.querySelector('.paciente');
    form.reset();
}