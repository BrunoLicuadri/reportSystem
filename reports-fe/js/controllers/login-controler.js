
function State(){
    this.inputName = null;
    this.inputPassword = null;

    this.btnSave = null;

    this.errorName = null;
    this.errorPassword = null;
}

const state = new State();


export function init(){
    state.inputName = document.getElementById("inputName");
    state.inputPassword = document.getElementById("inputPassword");

    state.btnSave = document.getElementById("btnSend");

    state.errorName = document.querySelector('[data-error="name"]');
    state.errorPassword = document.querySelector('[data-error="password"]');

    state.inputName.addEventListener('change', handleInputNameChange);
}

function setLoginError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}

function handleInputNameChange(event){
    if (event.target.value == ""){
        setLoginError("name", "Campo Obrigatório");
    }
    else {
        setLoginError("name", "");
    }
}

function handleInputPasswordChange(event){
    if (event.target.value == ""){
        setLoginError("password", "Senha Obrigatório");
    }
    else {
        setLoginError("password", "");
    }
}