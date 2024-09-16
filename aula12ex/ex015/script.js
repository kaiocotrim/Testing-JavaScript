function clicar() {
    var data = new Date();
    var ano = data.getFullYear();

    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');
    var img = document.createElement('img')
    img.setAttribute('id' , 'foto ')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = 'indefinido';
        
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10){
                //crianca
                img.setAttribute('src', 'FOTOBB.jpeg') 
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Menino.jpeg') 
            }   else if (idade, 50){
                //adulto
                img.setAttribute('src', 'Homen.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'Velho.jpeg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10){
                //crianca 
                img.setAttribute('src', 'FOTOBB.jpeg')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Menina.jpeg')
            }   else if (idade, 50){
                //adulto
                img.setAttribute('src', 'Mulher.jpeg')
            } else {
                //idoso
                img.setAttribute('src', 'Velha.jpeg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Idade: ${idade} anos | Gênero: ${genero}`;
        res.appendChild(img)
    }
}