let pagina = (window.location.pathname); // pega o endereço
pagina = pagina.substring(pagina.lastIndexOf('/') + 1); // pega o nome da página

// carrega os eventos dependendo do que a página usa
if(pagina.includes('cadastro') || pagina.includes('feriado')) {
  carregarModal();
  carregarPesquisar();
}
else if(pagina.includes('impressao')) {
  carregarPesquisar();
}

function carregarPesquisar() {

  const pesquisarInput = document.getElementById('pesquisar-input');
  const pesquisarIcon = document.getElementById('pesquisar-icon');

  // clica no span que envolve o ícone para focar no input, aumentando o tamanho
  pesquisarIcon.addEventListener('click', function() {
    pesquisarInput.focus();
  });

  // clica fora do input, limpa o campo
  pesquisarInput.addEventListener('blur', function() {
    pesquisarInput.value = "";
  });

  // a cada tecla pressionada, vai verificar se existe aquele conjunto de caracteres na 1ª célula da linha
  pesquisarInput.addEventListener('keyup', function(e) {
    const texto = e.target.value.toLowerCase();

    document.querySelectorAll('.tabela-item').forEach((linha) => {
      const item = linha.cells[0].textContent;

      if(item.toLowerCase().indexOf(texto) != -1) {
        linha.style.display = 'table-row';
      }
      else {
        linha.style.display = 'none';
      }
    })
  });
}

function carregarModal() {
  
  const modal = document.getElementById('modal-wrapper');

  document.getElementById('btnMostrarModal').addEventListener('click', function() {
    modal.classList.add('flex');
    modal.classList.remove('hidden');
  });
  
  document.querySelector('.btn-fechar').addEventListener('click', function() {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  });
  
  modal.addEventListener('click', function(e) {
    if(e.target === modal) {
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }    
  });
}