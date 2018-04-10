let pesquisarInput = document.getElementById('pesquisar-input');
let modal = document.getElementById('modal-wrapper');

// clica no span que envolve o ícone para focar no input, aumentando o tamanho
document.getElementById('pesquisar-icon').addEventListener('click', function() {
  pesquisarInput.focus();
});

pesquisarInput.addEventListener('blur', function() {
  pesquisarInput.value = "";
});

document.getElementById('btn-cadastrar-feriado').addEventListener('click', function() {
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