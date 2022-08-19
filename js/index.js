let opcion = parseInt(
  prompt("presione 1 para el ejercicio con while y 2 para el ejercicio con For")
);
let edad;
let contadormenores15 = 0;
let contadormenores18 = 0;
let contadormayores18 = 0;
switch (opcion) {
  case 1:
    let continuar = 1;
    edad = parseInt(prompt("ingrese la edad a evaluar"));

    while (continuar === 1) {
      if (edad < 15) {
        contadormenores15++;
        alert("No puede ingresar");
      } else if (edad < 18) {
        contadormenores18++;
        alert("Puede ingresar pero con un adulto");
      } else {
        contadormayores18++;
        alert("Puede Ingresar");
      }

      continuar = parseInt(
        prompt(
          "Si desea cargar otra Edad presione 1, de lo contrario ponga otro valor"
        )
      );
      if (continuar === 1) {
        edad = parseInt(prompt("ingrese su edad"));
      }
    }

    alert(
      `Cantidad de menores de 15 Años: ${contadormenores15} \n Cantidad de menores de 18 Años: ${contadormenores18} \n Cantidad de mayores de 18 Años: ${contadormayores18}`
    );

    break;
  case 2:
    let cantidad = parseInt(
      prompt("cuantas veces repetira el control de edad")
    );

    for (let i = 0; i < cantidad; i++) {
      edad = parseInt(prompt("ingrese la edad a evaluar"));
      if (edad < 15) {
        contadormenores15++;
        alert("No puede ingresar");
      } else if (edad < 18) {
        contadormenores18++;
        alert("Puede ingresar pero con un adulto");
      } else {
        contadormayores18++;
        alert("Puede Ingresar");
      }
    }

    alert(
      `Cantidad de menores de 15 Años: ${contadormenores15} \n Cantidad de menores de 18 Años: ${contadormenores18} \n Cantidad de mayores de 18 Años: ${contadormayores18}`
    );

    break;
  default:
    alert("No eligio ninguna opción valida");
    break;
}
