// let aberto = false
function menuToggle() {
    todoMenu.style.display == 'block' ? todoMenu.style.display = 'none' 
        : todoMenu.style.display = 'block' 
    // if(aberto) {
    //     todoMenu.classList.remove('show')
    //     aberto = false
    // } else {
    //     todoMenu.classList.add('show')
    //     aberto = true
    // }   
}

function novoTamanho() {
    if(window.innerWidth >= 768) todoMenu.style.display = 'block'
    else todoMenu.style.display = 'none'
}