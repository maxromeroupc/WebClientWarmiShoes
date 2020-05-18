(function(){
    
    let registrarProducto = () => { 
        
        let txtNombreProducto = document.getElementById('txtNombreProducto');
        let txtDescripcionProducto = document.getElementById('txtDescripcionProducto');
        let txtCostoducto = document.getElementById('txtCostoducto');
        let txtCantidadProducto = document.getElementById('txtCantidadProducto');
        let txtPrecioProducto = document.getElementById('txtPrecioProducto');
        
        let msgError = '';

        //if(msgError != ''){
            let divAlert = document.getElementById('divAlert');
            let spMsg = document.getElementById('spMsg');
            spMsg.textContent = 'Registrado...';
            divAlert.className = 'alert alert-success';
            divAlert.style.display = 'block';
        //}

    
    }

    //Eventos
    let btnSave = document.getElementById('btnSave');
    btnSave.addEventListener("click", registrarProducto );

    
    
}());





