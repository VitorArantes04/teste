alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 1000;
let numeroSecreto = parseInt(Math.random( ) * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
  chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
    break
    } else {
        alert('erro irmao') 
        if (numeroSecreto > chute) {alert(`o numero secreto e maior que ${chute}`)}
    else {alert(`o numero secreto e menor que ${chute}`)}
 tentativas++;}
};


let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'

alert(`parabens vc acertou o numero ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);




