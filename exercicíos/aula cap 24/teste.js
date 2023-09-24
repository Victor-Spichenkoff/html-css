function mostrarNome() {
    out.innerHTML = nome.value
}


function enviar() {
    const infos = {
        nome: nome.value
    }

    window.location.href = "http://pt.stackoverflow.com"
    console.log(infos.nome)
    // if(infos.nome) window.location.assign('/pag2.html')
    // else window.location.href = '/nhe'
}