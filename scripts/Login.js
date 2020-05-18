
window.onload = "loadInicial()";

let loadInicial = () => {
    alert('Load datos');
    var btnIniciar = document.getElementById('btnIniciar');
    btnIniciar.onclick('mostrarDatos()');
}


function mostrarDatos(){
    var txtUsuario = document.getElementById('txtUsuario');
    var txtClave = document.getElementById('txtClave');
    var divAlert = document.getElementById('divAlert');
    var spMsg = document.getElementById('spMsg');

    var msgError = '';
    if(txtUsuario.value == ""){
        msgError = ' -Ingrese el usuario \n';
    }

    if(txtClave.value == ""){
        msgError = msgError + ' -Ingrese la clave';
    }

    if(msgError != ''){
        divAlert.setAttribute('class','alert alert-danger');
        spMsg.innerText = msgError;    
        divAlert.style.display = 'block';
    }else{
        divAlert.className = 'alert alert-success';
        spMsg.innerText = 'Login completado satisfactoriamente.';
        divAlert.style.display = 'block';        
        //window.location = 'index.html';
        //location.href = 'views/RegistrarProducto.html';
        location.href = 'index.html';

    }

    //alert('El usuario '+ txtUsuario.value +' y la clave '+ txtClave.value );
    //alert(msgError);
}

