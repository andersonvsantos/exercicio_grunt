const botaoSortear = document.getElementById('botao-sortear');
const listahtml = document.getElementById('lista');
const displayNum = document.getElementById('displayNum');
const botaoRecarregar = document.getElementById('botao-recarregar');


let listaSorteados = [];
let repetiu = false;

function sortear() {
    let numeroSorteado = Math.random() * 70;
    numeroSorteado = Math.floor(numeroSorteado + 1);
    return numeroSorteado;
}

botaoRecarregar.addEventListener('click', function() {
    location.reload();
});

botaoSortear.addEventListener('click', function() {
    if(listaSorteados.length == 70) {
        alert('Todos os números sorteados, por favor recarregue a página');
        botaoSortear.style.display = 'none';
        displayNum.style.display = 'none';
        botaoRecarregar.style.display = 'block';
        //Verfica se todos os números não foram sorteados para não entrar no loop infinito.
    } else {
        let numeroSorteado = sortear();
    
        if(!listaSorteados.includes(numeroSorteado)) {
            if(listaSorteados.length == 0) {
                listaSorteados.push(numeroSorteado);
                //Evita que seja posto espaço no primeiro elemento do array
            } else {
                listaSorteados.push(' ' + numeroSorteado);
            }
            //Verifica se o número já foi sorteado anteriormente e adiciona a lista
        } else {
            repetiu = true;
            while(repetiu) {
                numeroSorteado = sortear();
                if(!listaSorteados.includes(numeroSorteado)) {
                    repetiu = false;
                }
            }
            //Caso o número for sorteado, entrará em um loop que irá gerar novos números até satisfazer a condição de saída. 
            listaSorteados.push(' ' + numeroSorteado);
        }
        displayNum.innerText = numeroSorteado;
        listahtml.innerText = listaSorteados;
    }
});