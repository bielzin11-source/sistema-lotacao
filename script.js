document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const cpf = document.getElementById('cpf').value.trim();
  const senha = document.getElementById('senha').value.trim();
  const message = document.getElementById('message');

  // Validação simples de CPF (11 números)
  const cpfRegex = /^\d{11}$/;

  if (!cpfRegex.test(cpf)) {
    message.textContent = 'CPF inválido. Digite 11 números.';
    return;
  }

  if (senha.length < 4) {
    message.textContent = 'Senha muito curta.';
    return;
  }

  // Aqui você faria a validação real contra banco de dados/API
  // Por enquanto, só mensagem de sucesso fake:
  message.style.color = 'green';
  message.textContent = 'Login realizado com sucesso!';

  // Depois de logar, redireciona para a próxima página (exemplo)
  setTimeout(() => {
    window.location.href = 'dashboard.html'; // depois você cria essa página
  }, 1500);
});
