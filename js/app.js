const btnEnviar = document.querySelector('#enviar')
const formulario = document.querySelector('#enviar-mail')

const messageEmails = document.querySelector('#email');
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');


eventListeners();
function eventListeners() {
    document.addEventListener('DomContentLoaded', iniciarApp)

    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);
}

function iniciarApp() {
    console.log('Iniciando...');
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); //
}
function validarFormulario(e) {
    if (e.target.value.length > 0) {
        console.log('escribiendo...');
    } else {
        e.target.classList.add('border', 'border-red-500');

        mostrarError('Todos los campos són obligatorios');
    }
    if (e.target.type === 'email') {
        const er = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;

        if (er.test(e.target.value)) {
            mostrarError('El email es valido');
        }else{
            console.log('El email no es valido');
        }
    }
}


function mostrarError(mensaje) {
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-content', 'error');

    const errores = document.querySelectorAll('.error');
    if (errores.length === 0) {
        formulario.appendChild(mensajeError);
    }
};