
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
    state.inputPassword.addEventListener('change', handleInputPasswordChange);

    state.btnSave.addEventListener('click', handleBtnSendClick);
}




function setLoginError(key, value){
    const element = document.querySelector(`[data-error="${key}"]`);
    element.innerHTML = value;
}


function handleInputNameChange(event){
    if (window.matchMedia("(min-width:768px)").matches && isEmpty(event.target.value)) {
        setLoginError("name", "Campo Obrigatório");
        inputName.classList.add("errorBorder");
    }
    else if (window.matchMedia("(max-width:767px)").matches && isEmpty(event.target.value)){
        inputName.classList.add("errorBorder");    
    }
    else{
        inputName.classList.remove("errorBorder");
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

function handleBtnSendClick(){
    state.inputName.value = "";
    state.inputPassword.value = "";
}


function isEmpty(element){
    return (element === undefined || element == null || element == "" || element == " ");
}