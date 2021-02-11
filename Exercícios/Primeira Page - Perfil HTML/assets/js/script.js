let nome = document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

function validarNome() {
    let txt = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txt.innerHTML = 'Insira um nome válido'
        txt.style.display = 'block'
        txt.style.color = 'red'
    }
    else{
        txt.style.display = 'none'
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
        if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
            txtEmail.innerHTML = 'Insira um email válido'
            txtEmail.style.color = 'red'
            txtEmail.style.display = 'block'
        }
        else{
            txtEmail.style.display = 'none'
            emailOk = true
        }
}

function validarAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
        if(assunto.value.length > 200){
            txtAssunto.innerHTML = 'Insira no máximo 200 caracteres.'
            txtAssunto.style.display = 'block'
            txtAssunto.style.color = 'red'
        }
        else{
            txtAssunto.style.display = 'none'
            assuntoOk = true
        }
}

function enviar(){
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert('Formulário enviado com sucesso.')
    } 
    else{
        alert('Preencha o formulário corretamente.')
    }
        
    
}