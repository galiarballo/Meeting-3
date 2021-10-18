function Sumar () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var suma = parseInt(n1) + parseInt(n2);
    
    alert("La suma es: " +suma)
}

function Restar () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var resta = parseInt(n1) - parseInt(n2);
    
    alert("La resta es: " +resta)
}

function Multiplicar () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var multip = parseInt(n1) * parseInt(n2);
    
    alert("La multiplicación es: " +multip)
}

function Dividir () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var division = parseInt(n1) / parseInt(n2);
    
    alert("La división es: " +division)
}

function Cuadrado () {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;

    var pot1 = ((parseInt(n1)) **2 );
    var pot2 = ((parseInt(n2)) **2 );

    var potencia = pot1 + pot2;

    alert("La suma de las potencias es de: " +potencia)
}

