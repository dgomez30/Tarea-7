//Ejercicio No.1
arregloCuadrado = (array) => {
    var arreglo = array.split(",")
    console.log("Arreglo inicial: " + arreglo);

    var cuadrados = arreglo.map(function(numero) {
        if (numero > 0) {
            return numero * numero;
        } else {
            return numero;
        }

    });
    console.log("Arreglo al cuadrado: " + cuadrados);
    document.getElementById('labelArreglo').innerHTML = "Respuesta: " + cuadrados;
}

//Ejercicio No.2
function mostrarInventario(categoria) {
    const inventario = [{
            nombre: 'Jamon',
            precio: 5,
            categoria: "alimentos"
        },
        {
            nombre: 'Aceite',
            precio: 25,
            categoria: "alimentos"
        },
        {
            nombre: 'Pan Integral',
            precio: 20,
            categoria: "alimentos"
        },
        {
            nombre: 'Acetaminufen',
            precio: 5,
            categoria: "medicinas"
        },
        {
            nombre: 'Vitaflenaco',
            precio: 10,
            categoria: "medicinas"
        },
        {
            nombre: 'Alcohol',
            precio: 5,
            categoria: "medicinas"
        }
    ];

    totalPorCategoria = (inventario, categoria) => {
        let inventarioFiltrado = inventario.filter(function(item) {
            return item.categoria === categoria;
        });

        console.log("Inventario Seleccionado: " + inventarioFiltrado.map(a => a.nombre) + " categoria: " + categoria);

        let itemsCategoria = inventarioFiltrado.filter(function(item) {
            return item.precio > 0;
        });

        let preciosArreglo = itemsCategoria.map(a => a.precio);
        let precioTotal = preciosArreglo.reduce(function(a, b) { return a + b; });

        console.table("Precios Arreglo: " + preciosArreglo);
        console.table("Precio Total: " + precioTotal);
        document.getElementById('labelInventario').innerHTML = "Respuesta: " + precioTotal;
    }

    totalPorCategoria(inventario, categoria);
}

//Ejercicio No.3
fraseTipoOracion = (oracion) => {
    console.log("Oracion recibida: " + oracion);

    let oracionUpper = oracion.toLowerCase()
        .trim()
        .split(' ')
        .map(v => v[0].toUpperCase() + v.substr(1))
        .join(' ');

    console.table("Oracion modificada con expresion regular: " + oracion.replace(/\b\w/g, l => l.toUpperCase()));
    console.table("Oracion modificada sin expresion regular: " + oracionUpper);

    document.getElementById('labelOracion').innerHTML = "Respuesta: " + oracionUpper;
}

//Ejercicio No.4
promedioArreglo = (array) => {
    var arreglo = array.split(",").map(Number);
    console.log("Arreglo inicial: " + arreglo);

    let cantidadItems = Number(arreglo.length);
    let totalSuma = arreglo.reduce((previous, current) => current += previous);
    let promedio = totalSuma / cantidadItems;

    console.log("Promedio del arreglo: " + promedio);
    document.getElementById('labelPromedio').innerHTML = "Respuesta: " + promedio;
}

//Ejercicio No.5
function buscarPar(array) {
    let arreglo = array.split(",").map(Number);
    let sumaPar = document.getElementById('txtParSuma').value;

    console.log("Arreglo inicial: " + arreglo + " suma buscada: " + sumaPar);

    for (let value of arreglo) {
        for (let value2 of arreglo) {
            if (value != value2 && (arreglo[value] + arreglo[value2]) == sumaPar) {
                console.log("Primer valor: " + arreglo[value] + " Segundo valor: " + arreglo[value2]);
                document.getElementById('labelPar').innerHTML = "Primer valor: " + arreglo[value] + " Segundo valor: " + arreglo[value2];
            }
        }
    }
}

//Ejercicio No.6
operacionesArreglo = (arreglo) => {
    console.log("Arreglo inicial: " + arreglo);
    console.log("Arreglo ordenado: " + arreglo.sort());

    let arregloClon = Array.from(arreglo);

    console.log("Arreglo clon sin monica: " + arregloClon.map(function(item) {
        if (item != "Monica") {
            return item;
        }
    }));

    console.log("Arreglo removiendo a Breny: " + arregloClon.map(function(item) {
        if (item != "Breny") {
            return item;
        }
    }));

    arregloClon.push("Dafne");
    console.log("Arreglo mi nombre al final: " + arregloClon);
}

operacionesArreglo(["Diana", "Monica", "Maria", "Breny"]);