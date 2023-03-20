cedulaing = prompt("ingrese su cedula")
cedulareg = "1098727891"
contraseñaing = prompt("ingrese su contraseña")
contraseñareg = "1098"
saldo = "$500.000"
veces=2;
for (let s = 1; s <= 3; s++) 

    if (cedulaing == cedulareg && contraseñaing == contraseñareg) {
        alert("su saldo actual es de " + "  " + saldo);

        cedulaing = prompt("ingrese su cedula");
        contraseñaing = prompt("ingrese su contraseña");

    } else if (cedulaing != cedulareg && contraseñaing == contraseñareg) {
        alert("usuario ingresado es incorrecto" + "le quedan "+veces+" intentos");

        cedulaing = prompt("ingrese su cedula");
        contraseñaing = prompt("ingrese su contraseña");
        veces--;

    }else if (cedulaing == cedulareg && contraseñaing != contraseñareg) {
        alert("usuario ingresado es incorrecto" + "le quedan "+veces+" intentos");

        cedulaing = prompt("ingrese su cedula");
        contraseñaing = prompt("ingrese su contraseña");
        veces--;
    }
    else if (cedulaing != cedulareg && contraseñaing != contraseñareg) {
        alert("cuenta bloqueada");

        cedulaing = prompt("ingrese su cedula");
        contraseñaing = prompt("ingrese su contraseña");
        veces--;}










