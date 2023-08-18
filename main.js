$('form').on('submit', function(e) {
  e.preventDefault()
  const tarefa = $('#tarefa')
  const novoItem = $('.tarefas')
  $(`<li>${tarefa.val()}</li>`).appendTo(novoItem)
  console.log('t')
})

$(".tarefas").on("click", "li", function() {
  $(this).toggleClass("tarefaRealizada");
});