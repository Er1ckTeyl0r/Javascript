function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <21) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.jpg')
            } else if (idade < 55) {
                // Adulto
                img.getAttribute('src', 'homem-adulto.jpg')
            } else {
                //Idoso
                img.getAttribute('src', 'homem-velho.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <21) {
                //Jovem
                img.getAttribute('src', 'mulher-jovem.jpg')
            } else if (idade < 55) {
                // Adulta
                img.getAttribute('src', 'mulher-adulta.jpg')
            } else {
                //Idosa
                img.getAttribute('src', 'mulher-velha.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}