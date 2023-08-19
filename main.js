let quantidadeTarefas = 0
$(document).ready(function() {
  $('form').on('submit', function(e) {
    e.preventDefault()
    const tarefa = $('#tarefa')
    const novoItem = $('.tarefas')
    $(`<li><a>${tarefa.val()}</a></li>`).appendTo(novoItem)
    console.log('t')
  })
  
  $('.tarefas').on('click', 'li', function() {
    $(this).toggleClass("tarefaRealizada")
  })
})