const modal = document.getElementById('modal-wrapper');
const pesquisarInput = document.getElementById('pesquisar-input');
const pesquisarIcon = document.getElementById('pesquisar-icon');

//---  PESQUISAR  ---//

// clica no span que envolve o ícone para focar no input, aumentando o tamanho
pesquisarIcon.addEventListener('click', function() {
  pesquisarInput.focus();
});

// clica fora do input, limpa o campo
pesquisarInput.addEventListener('blur', function() {
  pesquisarInput.value = "";
});

pesquisarInput.addEventListener('keyup', function(e) {
  const texto = e.target.value.toLowerCase();

  document.querySelectorAll('.tabela-item').forEach((linha) => {
    const item = linha.cells[0].textContent;

    if(item.toLowerCase().indexOf(texto) != -1) {
      linha.style.display = 'block';
    }
    else {
      linha.style.display = 'none';
    }
  })
});


//--- MODAL ---//
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