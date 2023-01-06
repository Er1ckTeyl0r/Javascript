function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var horas = agora.getHours()
    var minutos = agora.getMinutes()
    msg.innerHTML = `Agora são ${horas} horas e ${minutos} minutos.`
    if (horas >= 0 && horas < 12) {
        // BOM DIA!
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (horas >= 12 && horas < 18) {
        // BOA TARDE!
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        // BOA NOITE!
        img.src = 'noite.jpg'
        document.body.style.background = '#515154'
    }
}
