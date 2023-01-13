console.log('Contadores de um ate dez!')

var contador = 1
while (contador <= 10) {
    console.log(contador)
    contador++
}

do {
    console.log(contador)
    contador++
} while (contador <= 10)

for (var contador = 1; contador <= 10; contador++) {
    console.log(contador)
}