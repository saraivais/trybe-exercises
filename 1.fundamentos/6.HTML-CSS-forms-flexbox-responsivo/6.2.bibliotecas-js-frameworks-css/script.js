//Interrompa o comportamento padrão do botão submit utilizando o método preventDefault()-OK

const submitBtn = document.querySelector('#submit-btn');

function submitBtnPreventDefault(event) {
  event.preventDefault();
}

submitBtn.addEventListener('click', submitBtnPreventDefault);

// Faça a validação dos campos com limite de caracteres. Caso não estejam dentro do esperado ao clicar no botão de submit, um alerta deve ser mostrado com a mensagem: 'Dados Inválidos'. Caso contrário, a mensagem 'Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.' deverá aparecer na tela.


alert('Dados Inválidos')
alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')