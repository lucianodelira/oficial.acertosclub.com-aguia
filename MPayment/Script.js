<script>
document.addEventListener('DOMContentLoaded', () => {
  // Libera automaticamente o acesso ao sistema de palpites
  localStorage.setItem('privilegeAccess', 'true');

  // Redefine openPaymentModal para não fazer nada
  window.openPaymentModal = function () {
    console.log("Acesso já liberado. Pagamento desativado.");
  };

  // Remove botão de pagamento se existir
  const btnPagamento = document.querySelector('#botaoPagamento'); // verifique se esse ID está certo
  if (btnPagamento) {
    btnPagamento.style.display = 'none';
  }

  // Redefine createModal para evitar que o modal apareça mesmo que seja chamado
  window.createModal = function () {
    console.log("Modal de venda desativado.");
    localStorage.setItem('privilegeAccess', 'true');
  };
});
</script>
