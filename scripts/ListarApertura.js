
let agregarApertura = () =>{

    let winReg = window.open('RegistrarApertura.html','PopHijo','height=600px,width=800px,top=200px,left=200px');
    //winReg.alertHijo();
    localStorage.setItem('IdApertura','123456');    
    winReg.focus();        
    //txtIdApertura.value = '1';
    //winReg.document.write('<p>demo desde padre</p>');    
    winReg.opener.document.getElementById('demo').innerHTML = 'me fui a registrar';
    
}

let guardarApertura = () =>{
    let e = localStorage.getItem('oApertura');
    let oApertura = JSON.parse(e);
    
    let rowTab = document.getElementById('tableApertura');
    let row = document.createElement('tr');
    let tabBody = rowTab.getElementsByTagName('tbody').item(0);
    //alert(rowTab.tBodies.length);

    let item = tabBody.childElementCount;
    
    let cell0 = row.insertCell(0);
    cell0.innerHTML = item + 1;

    let cell1 = row.insertCell(1);
    cell1.innerHTML = oApertura.IdApertura;

    let cell2 = row.insertCell(2);
    cell2.innerHTML = oApertura.FechaInicioApertura;

    let cell3 = row.insertCell(3);
    cell3.innerHTML = oApertura.FechaFinApertura;

    let cell4 = row.insertCell(4);
    cell4.innerHTML = oApertura.EstadoApertura;

    let cell5 = row.insertCell(5);
    cell5.innerHTML = oApertura.Sincronizado;
    
    //rowTab.appendChild(row);
    tabBody.appendChild(row);

    localStorage.removeItem('oApertura');
    //tabBody.innerHTML = row;
    //tabBody.item(0).appendChild(row);
    //tabBody.item(0).innerHTML = '<tr><td>fila nueva</td></tr>';
}


function agregarAperturaTradicional(){
    let rowTab = document.getElementById('tableApertura');
    rowTab.appendChild('<tr><td>fila nueva tradicional</td></tr>');
}