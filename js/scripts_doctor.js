const boton = document.getElementById("boton");

//Eventos
boton.addEventListener("click", (e) => {
    e.preventDefault();
    validarDoctor();
    enviarD();
});

//Variables del Doctor
let NameD = document.getElementById('do_name').value;
let LnameD = document.getElementById('do_lastname').value;
let CedulaD = document.getElementById('do_cedula').value;
let EspecialidadD = document.getElementById('do_especialidad').value;
let Consultorio = document.getElementById('consul').value;
let Correo = document.getElementById('email').value;

const Doctores = [];
let b = 0;

//Expresiones regulares
const valName = /^[A-Za-z]+\s*?[A-Za-z]*?\s*?[A-Za-z]*?\s*?$/g;
const valLname = /^[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?[A-Za-zÑñÁáÉéÍíÓóÚú]+\s*?$/g;
const valCedula = /^\d$/g;
const valCorreo = /^\S+@\S+\.\S+$/;
const valConsultorio = /^(\d{3})$/g;

//Validación datos Doctor
function validarDoctor () {

    let validacion = true;
    let alerta = 'Los siguientes parametros no son validos:\r\n';

    function validarNombre() {
        let NameD = document.getElementById('do_name').value;
            
        if (!valName.test(NameD)) {
            validacion = false;
            alerta += "-Nombre\n";
            let error = document.getElementById('do_name');
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787';
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white';
                    })
        } else {
            let error = document.getElementById('do_name');
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white';
            })
        }
        return NameD;
    }

    validarNombre()
    
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

    validarApellido()

    function validarCedula() {
        let CedulaD = document.getElementById('do_cedula').value;
        
        if (!valCedula.test(CedulaD)) {
            validacion = false;
            alerta += "-Cédula\n";
            let error = document.getElementById('do_cedula');
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787';
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white';
                    })
        } else {
            let error = document.getElementById('do_cedula');
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white';
            })
        }
        return CedulaD;
    }

    validarCedula()

    function validarEspecialidad() {
        let EspecialidadD = document.getElementById('do_especialidad').value;
        
        if (EspecialidadD === 'Especialidad') {
            validacion = false;
            alerta += "-Especialidad\n";
            let error = document.getElementById('do_especialidad');
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787';
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white';
                    })
        } else {
            let error = document.getElementById('do_especialidad');
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white';
            })
        }
        return EspecialidadD;
    }
    
    validarEspecialidad()

    function validarConsultorio() {
        let Consultorio = document.getElementById('consul').value;
        
        if (!valConsultorio.test(Consultorio)) {
            validacion = false;
            alerta += "-Consultorio\n";
            let error = document.getElementById('consul');
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787';
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white';
                    })
        } else {
            let error = document.getElementById('consul');
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backroundColor = 'white';
            })
        }
        return Consultorio;
    }
    
    validarConsultorio()

    function validarCorreo() {
        let Correo = document.getElementById('email').value;
        
        if (!valCorreo.test(Correo)) {
            validacion = false;
            alerta += "-Correo electronico\n";
            let error = document.getElementById('email');
                error.style.border = 'solid #FF6060 2px';
                error.style.backgroundColor = '#FF8787';
                    error.addEventListener('input',() => {
                        error.style.border = 'solid 2px';
                        error.style.backgroundColor = 'white';
                    })
        } else {
            let error = document.getElementById('email');
            error.addEventListener('input',() => {
                error.style.border = 'solid 2px';
                error.style.backgroundColor = 'white';
            })
        }
        return Correo;
    }
    
    validarCorreo()

    if (validacion === false) {
        alert(alerta + "Por favor, ingrese valores validos.");
        } else {
            
        const Doctor = {
            Cedula : validarCedula(),
            Nombres : validarNombre(),
            Apellidos : validarApellido(),
            Especialidad : validarEspecialidad(),
            Consultorio : validarConsultorio(),
            Correo : validarCorreo(),
        };
            Doctores.push(Doctor);

            let  jsonDoctores = JSON.stringify(Doctores);
            let objDoctores = JSON.parse(jsonDoctores);
            generarLista(objDoctores)
        }

}


//Lista de Doctores
function generarLista(objDoctores) {
    let name_col = ['Cedula de Ciudadania', 'Nombres', 'Apellidos', 'Especialidad', 'Consultorio', 'Correo electronico'];
    let lista_container = document.getElementById("lista");
        lista_container.classList.remove('lista_none');
        lista_container.classList.add('lista_style');
    
        let tabla_doctores = document.createElement('table');
        let thead_doctores = document.createElement('thead');
        let tbody_doctores = document.createElement('tbody');
        thead_doctores.classList.add('doc_th')
        tbody_doctores.classList.add('doc_tr')


        function campos (a) {
            let tr_doctores = document.createElement('tr');
            for (let x in a) {
                let th_doctores = document.createElement('th');
                let cont = document.createTextNode(a[x]);
                th_doctores.appendChild(cont);
                tr_doctores.appendChild(th_doctores);
            }
            thead_doctores.appendChild(tr_doctores);
        }

        function registros () {
            for (let i in objDoctores) {
                let lis_doctores = objDoctores[i];
                for (let y = 0; y < 1; y++ ) {
                    let tupla = document.createElement('tr');
                    for (let z in lis_doctores) {
                        let celda = document.createElement("td");
                        let valor = document.createTextNode(lis_doctores[z]);
                        celda.appendChild(valor);
                        tupla.appendChild(celda);
                    }
                    tbody_doctores.appendChild(tupla);
                }
                b++;
            }
            tabla_doctores.appendChild(thead_doctores);
            tabla_doctores.appendChild(tbody_doctores);
            lista_container.appendChild(tabla_doctores);
        }

        if (b === 0){
            campos(name_col);
            registros();
        } else {
            let tabla_desechable = document.getElementsByTagName('table');
            tabla_desechable[0].remove();
                campos(name_col);
                registros();
            }
}

function enviarD () {
    let form = document.querySelector('.doctor');
    form.reset();
}
