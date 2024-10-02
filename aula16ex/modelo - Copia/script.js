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



function inlista(n, l) {
    if (l.indexOf(Number(n)) != -1 ) {
        return true
    }  else {
        return false
    }
}

<!

function adicionar(){
    if (isnumero(num.value) && !inlista (num.value, valores)){
        valores.push(number(num.value))
        let item = document.createElement('option')
        intem.text = `Valor' ${num.value} adicionado.`
        lista.appendChild(item)
    } else {
        window.alert ('O valor já foi encontrado na lista .')
    }

    num.value = ''
    num.focus()

}