var setadireita = window.document.getElementById("setadireita")
var setaesquerda = window.document.getElementById("setaesquerda")
var leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var bruna = window.document.getElementById("bruna")

function RolarParaDireita() {
    leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaesquerda.style = "display:flex"
    setadireita.style = "display:none"
    
}

function Retornar() {

    leonardo.style ="display:flex"
    bruna.style="display:none"
    setadireita.style = "display:flex"
    setaesquerda.style= "display:none"
}