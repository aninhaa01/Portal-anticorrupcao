document.getElementById("formDenuncia").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("mensagem").textContent =
    "✅ Denúncia registrada com sucesso (simulação). Obrigado pela sua participação!";
  this.reset();
});
