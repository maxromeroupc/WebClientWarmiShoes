(function(){
    let IdApertura = sessionStorage.getItem('IdApertura');
    let txtIdApertura = document.getElementById('txtIdApertura');
    txtIdApertura.value = IdApertura;
    //alert('llegué');
}());



let registrarApertura = () =>{
    
    let txtIdApertura = document.getElementById('txtIdApertura');
    let txtFechaInicioApertura = document.getElementById('txtFechaInicioApertura');
    let txtFechaFinApertura = document.getElementById('txtFechaFinApertura');
    let cboEstadoApertura = document.getElementById('cboEstadoApertura');
    let chkSincronizado = document.getElementById('chkSincronizado');

    let oApertura = new Object();
    oApertura.IdApertura = txtIdApertura.value ;
    oApertura.FechaInicioApertura = txtFechaInicioApertura.value;
    oApertura.FechaFinApertura = txtFechaFinApertura.value;
    oApertura.IdEstadoApertura = cboEstadoApertura.value;
    oApertura.EstadoApertura = cboEstadoApertura.options[cboEstadoApertura.selectedIndex].text;
    oApertura.Sincronizado = chkSincronizado.checked;

    //let cad = cboEstadoApertura.options[cboEstadoApertura.selectedIndex].text;
    //let cad2 = txtIdApertura.value + " - " + txtFechaInicioApertura.value 
    //    + " - " + txtFechaFinApertura.value + " - " + cboEstadoApertura.value
    //        + " - " + chkSincronizado.checked;
    //alert(cad);
    //alert(oApertura);
    //let divAlert = document.getElementById('divAlert');
    //alert(divAlert);
    //alert(window.opener.document.getElementById('demo'));
    localStorage.setItem('oApertura', JSON.stringify(oApertura) );
    
    let winLista = window.opener;
    let divPadre = winLista.document.getElementById('demo');
    divPadre.innerHTML = 'agregar apertura';    
    divPadre.click();
    //winLista.
    //alert(cad);
    

} 

let guardarApertura = (e) => {

}

let alertHijo = () =>{ alert('voy al hijo'); }