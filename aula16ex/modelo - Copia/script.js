let num = document.getElementById ('fnum')
let res = document.querySelectorAll ('div#res')
let lis = document.getElementById ('flista')
let valores = [] 

function isnumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true  
    } else {
    return false
    }
 }



function inlista(n, 1) {
    if (l.indexOf(Number(n)) ! = -1 ) {
        return true
    }  else {
        return false
    }
}



function adicionar(){
    if (isnumero(num.value) && !inlista (num.value, valores)){
        Window.alert ('tudo okay')

    } else {
        window.alert ('O valor já foi encontrado na lista .')
    }

}