document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const cpf = document.getElementById('cpf').value;
  const senha = document.getElementById('senha').value;

  fetch('https://script.google.com/macros/s/AKfycbxjp2F9Bl0COsFyFS9RiEGSwvMZijPzgvfCBURd4kfDfwIL4sGmxQ9g-LqohEQJ8epHlQ/exec', {
    method: 'POST',
    body: JSON.stringify({ cpf: cpf, senha: senha }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === 'success') {
      document.getElementById('message').textContent = 'Login realizado com sucesso!';
      // redirecionar para a página protegida
      window.location.href = 'painel.html';
    } else {
      document.getElementById('message').textContent = 'CPF ou senha inválidos!';
    }
  })
  .catch(err => {
    console.error('Erro:', err);
    document.getElementById('message').textContent = 'Erro ao conectar com o servidor.';
  });
});
.then(data => {
  if (data.status === "success") {
    // Salvando dados no localStorage
    localStorage.setItem("cpf", data.cpf);
    localStorage.setItem("nome", data.nome);
    localStorage.setItem("acesso", data.acesso);
    localStorage.setItem("escola", data.escola || ""); // Só para gestor

    // Redirecionando
    if (data.acesso === "ADMINISTRADOR") {
      window.location.href = "admin-dashboard.html";
    } else if (data.acesso === "GESTOR") {
      window.location.href = "gestor-dashboard.html";
    }
  } else {
    document.getElementById("message").textContent = "CPF ou senha incorretos.";
  }
})
