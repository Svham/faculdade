const formulario = document.getElementById('formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function (event) {
    event.preventDefault(); // Impede envio automático

    const nome = document.getElementById('campoNome').value.trim();
    const email = document.getElementById('campoEmail').value.trim();

    if (nome === "" || email === "") {
        mensagem.style.color = "red";
        mensagem.textContent = "⚠️ Preencha todos os campos obrigatórios (Nome e E-mail).";
    } else {
        mensagem.style.color = "green";
        mensagem.textContent = "✅ Formulário enviado com sucesso!";

        // Limpa os campos
        formulario.reset();
    }
});