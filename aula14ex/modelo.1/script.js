function clicar(){
    let ini = document.getElementById('txi');
    let fim = document.getElementById('txf');
    let salto = document.getElementById('txp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || salto.value.length == 0){
        res.innerHTML = '[ERRO] Está faltando valor a ser digitado...';
    } else {
        res.innerHTML = 'Calculando...<br>';

        let inicio = Number(ini.value);
        let fim0 = Number(fim.value);
        let salto0 = Number(salto.value);

        if (salto0 <= 0) {
            alert('Salto inválido! Considerando SALTO = 1');
            salto0 = 1;
        }

        if (inicio < fim0) {
            // Contagem crescente
            for (let c = inicio; c <= fim0; c += salto0) {
                res.innerHTML += ` ${c} `;
            }
        } else {
            // Contagem decrescente
            for (let c = inicio; c >= fim0; c -= salto0) {
                res.innerHTML += ` ${c} `;
            }
        }
    }
}
    