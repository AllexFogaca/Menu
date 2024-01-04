document.getElementById('whatsappLogo').addEventListener('click', redirectToWhatsApp);

function redirectToWhatsApp() {
  window.location.href = "https://wa.me/41995613571";
}

document.addEventListener("DOMContentLoaded", function () {
    var produtosButton = document.getElementById("produtos-button");
    var contatoButton = document.querySelector(".nav-container .button:last-child");
});

function enviarFormulario() {
  var sucesso = true;

  if (sucesso) {
    exibirMensagemDeSucesso();
 
    return false;
  } else {

    return true; 
  }
}

function exibirMensagemDeSucesso() {
  // Exibir a mensagem de sucesso
  var mensagemDiv = document.getElementById("mensagem");
  mensagemDiv.innerHTML = "EMAIL ENVIADO COM SUCESSO";
  mensagemDiv.style.display = "block";
}