function tabuada(){
    let num = document.getElementById ('txn')
    let tab = document.getElementById ('seltab')

    if (num.value.length == 0){
        window.alert ('por favor, digite um valor')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
            let intem = document.createElement('option')
            intem.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(intem)
            tab.value = `tab${c}`
            c++
        }
    } 

}