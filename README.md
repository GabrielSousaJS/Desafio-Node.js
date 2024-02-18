<h1>Desafio Node.js</h1>

<div>
  <h4>
    Sobre o desafio
  </h4>
  <p>
    Nesse desafio é criado uma API para realizar um CRUD de <i>tasks</i> (tarefas).
  </p>
  <p>
    Dentre as funcionalidades temos:
  </p>
  <ul>
    <li>Criação de uma task</li>
    <li>Listagem de todas as tasks</li>
    <li>Atualização de uma task pelo id</li>
    <li>Remover uma task pelo id</li>
    <li>Marcar pelo id uma task como completa</li>
    <li>E a maior funcinalidade é a importação de tasks por um arquivo CSV</li>
  </ul>
  <h4>Regas de negócio</h4>
  <p>Para compreendermos a regra de negócio, basta observarmos as propriedades presentes na task:</p>
  <ul>
    <li><strong>id</strong> - Identificador único de cada task</li>
    <li><strong>title</strong> - Título da task</li>
    <li><strong>description</strong> - Descrição detalhada da task</li>
    <li><strong>completed_at</strong> - Data de quando a task foi concluída. O valor inicial deve ser <strong>null</strong></li>
    <li><strong>created_at</strong> - Data de quando a task foi criada</li>
    <li><strong>updated_at</strong> - Deve ser sempre alterado para a data de quando a task foi atualizada</li>
  </ul>
</div>
