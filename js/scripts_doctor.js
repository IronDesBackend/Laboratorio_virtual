const boton = document.getElementById("boton");

//Eventos
boton.addEventListener("click", (e) => {
    e.preventDefault();
    validarDoctor();
    // enviarD();
});

//Variables del Doctor
let NameD = document.getElementById('do_name').value;
let LnameD = document.getElementById('do_lastname').value;
let CedulaD = document.getElementById('do_cedula').value;
let EspecialidadD = document.getElementById('do_especialidad').value;
let Consultorio = document.getElementById('consul').value;
let Correo = document.getElementById('email').value;

const Doctores = [];

//Expresiones regulares
const valName = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
const valLname = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?$/g;
const valCedula = /^\d$/g;
const valCorreo = /^\S+@\S+\.\S+$/;
const valConsultorio = /^(\d{3})$/g;
// const validacion = true;

//Validación datos Doctor
function validarDoctor () {

    let validacion = true;
    let alerta = 'Los siguientes parametros no son validos:\r\n'

    function validarNombre() {
        let NameD = document.getElementById('do_name').value;
            
        if (!valName.test(NameD)) {
            validacion = false;
            alerta += "-Nombre\n";
            let error = document.getElementById('do_name')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('do_name')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
                console.log(NameD)
            })
        }
        return NameD;
    }
    
    function validarApellido() {
        let LnameD = document.getElementById('do_lastname').value;
        
        if (!valLname.test(LnameD)) {
            validacion = false;
            alerta += "-Apellido\n";
            let error = document.getElementById('do_lastname')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('do_lastname')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return LnameD;
    }

    function validarCedula() {
        let CedulaD = document.getElementById('do_cedula').value;
        
        if (!valCedula.test(CedulaD)) {
            validacion = false;
            alerta += "-Cédula\n";
            let error = document.getElementById('do_cedula')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('do_cedula')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return CedulaD;
    }

    function validarEspecialidad() {
        let EspecialidadD = document.getElementById('do_especialidad').value;
        
        if (EspecialidadD === 'Especialidad') {
            validacion = false;
            alerta += "-Especialidad\n";
            let error = document.getElementById('do_especialidad')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('do_especialidad')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return EspecialidadD;
    }

    function validarConsultorio() {
        let Consultorio = document.getElementById('consul')

        if (valConsultorio.test(Consultorio)) {
            validacion = false;
            alerta += "-Consultorio\n";
            let error = document.getElementById('consul')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('consul')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backroundColor = 'white'
            })
        }
        return Consultorio;
    }

    function validarCorreo() {
        let Correo = document.getElementById('email').value;
        
        if (!valCorreo.test(Correo)) {
            validacion = false;
            alerta += "-Correo electronico\n";
            let error = document.getElementById('email')
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787'
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white'
                    })
        } else {
            let error = document.getElementById('email')
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white'
            })
        }
        return Correo;
    }
    
    validarNombre()
    validarApellido()
    validarCedula()
    validarEspecialidad()
    validarConsultorio()
    validarCorreo()

    if (validacion === false) {
        alert(alerta + "Por favor, ingrese valores validos.")
        } else {
            
        const Doctor = {
            Nombres : validarNombre(),
            Apellidos : validarApellido(),
            Cedula : validarCedula(),
            Especialidad : validarEspecialidad(),
            Consultorio : validarConsultorio(),
            Correo : validarCorreo(),
        };
            // console.log(Persona)

            let  jsonDoctores = JSON.stringify(Doctor);
            //console.log(jsonPaciente)
            
            //console.log(Pacientes);
            Doctores.push(jsonDoctores);
        }

    
    // console.log(validacion)
    // //console.log(jsonPaciente)
    // console.log(Doctores)

    // function prueba01 () { console.log("estoy imprimiendo la validacion " + validacion)}
    // setInterval(prueba01, 5000)
}


function enviarD () {
    let form = document.querySelector('.doctor');
    form.reset();
}
