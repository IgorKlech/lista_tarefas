$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); 
        const nomeTarefa = $('#nome-tarefa').val(); 
        if (nomeTarefa.trim() !== '') { 
            const novaTarefa = $('<li></li>').text(nomeTarefa); 
            $('#lista-tarefa').append(novaTarefa); 
            $('#nome-tarefa').val(''); 
        }
    });

    $('#lista-tarefa').on('click', 'li', function() {
        $(this).toggleClass('completed'); 
    });
});