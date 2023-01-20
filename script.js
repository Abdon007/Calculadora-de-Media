let aviso = document.querySelector('#aviso');
let formulario = document.querySelector('form');

let btnCalcular = document.querySelector('#btn-1');
let btnLimpar = document.querySelector('#btn-2');

let cxNota1 = document.querySelector('#input-1');
let cxNota2 = document.querySelector('#input-2');
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao');

function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}


function situacaoFinal(mediafinal) {
    let situacaoFinal = '';

    if (mediafinal >= 5) {
        situacaoFinal = 'Aprovado(a)';
    } else if (mediafinal <= 4) {
        situacaoFinal = 'Reprovado(a)';
    } else {
        situacaoFinal = 'Recuperação';
    }
    return situacaoFinal;
}

function formatarSituação(situacaoFinal) {
    console.log('Situação Final ' + situacaoFinal)
    switch (situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('Reprovado')
            cxSituacao.classList.remove('Recuperacao')
            cxSituacao.classList.add('Aprovado')
            console.log('adicionar class aprovado')
            break

        case 'Reprovado(a)':
            cxSituacao.classList.remove('Aprovado')
            cxSituacao.classList.remove('Recuperacao')
            cxSituacao.classList.add('Reprovado')
            console.log('adicionar class Reprovado')
            break

        case 'Recuperação':
            cxSituacao.classList.remove('Aprovado')
            cxSituacao.classList.remove('Reprovado')
            cxSituacao.classList.add('Recuperacao')
            console.log('adicionar class Recuperação')
            break
    }
}

function validarNumero(numero){
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if(num1 < 0 ||num1 >10 ||num2 < 0||num2 > 10){
        formulario.reset()
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function (){
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000);
    }
}

btnCalcular.addEventListener('click', function (e){
    console.log('Calcular Média');

    let nota1 = parseFloat(cxNota1.value);
    let nota2 = parseFloat(cxNota2.value);
    let media = calcularMedia(nota1,nota2);

    console.log(nota1);
    console.log(nota2);
    console.log(media);
    
    if(isNaN(media) || media < 0){
        console.log("Não é um número")
        cxSituacao.value = '';
    }else{
        cxMedia.value = parseFloat(media);
        cxSituacao.value = situacaoFinal(media);
        formatarSituação(situacaoFinal(media));
    }
    e.preventDefault();
})


btnLimpar.addEventListener('click', function (){
    
    cxSituacao.classList.remove('Aprovado')
    cxSituacao.classList.remove('Reprovado')
    cxSituacao.classList.remove('Recuperacao')

})
