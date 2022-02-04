//Criar uma variável para armazenar o estado de uma pessoa em um processo seletivo;
//Ciar uma estrutura switch/case para imprimir mensagens de acordo com o estado;

var estado = 'aprovada';

switch (estado) {
    case 'aprovada':
        console.log("Parabéns, você foi aprovado(a)!");
        break;
    case 'lista':
        console.log("Você está na nossa lista de espera");
        break;
    case 'reprovada':
        console.log("Você foi reprovado(a)");
        break;
    default:
        console.log("Não se aplica");
        break;
}