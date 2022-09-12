function convertir(){
    var valore = parseInt(document.getElementById('valor').value);
    var resultado = 0;
    var dolar = 142.29;
    var euro = 143.93;
    if (document.getElementById('uno').checked){
        resultado = valore / dolar;
        alert('El cambio de Pesos a Dolares es:$' + resultado.toFixed(2));
    }
    else if (document.getElementById('dos').checked){
        resultado = valore / euro;
        alert('El cambio de Pesos a Euros es:$' + resultado.toFixed(2));
    }
    else{
        alert('Tienes que completar todas las casillas')
    }
}