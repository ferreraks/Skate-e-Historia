// scripts.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio automático

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
    } else {
        // Simulação de autenticação bem-sucedida
        // Aqui você pode adicionar a lógica de autenticação real ou redirecionamento
        // Por exemplo, enviar uma requisição ao backend para validar o login.

        // Redirecionamento para o feed de atividades ou perfil do usuário
        window.location.href = "./feed.html" // Substitua por 'perfil.html' ou outra página conforme necessário
    }
});
