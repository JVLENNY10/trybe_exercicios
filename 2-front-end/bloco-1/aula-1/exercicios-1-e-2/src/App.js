const Task = (value) => {
  return (
    <h1>{value} Tarefas:</h1>
  );
};

const appointments = ['Arrumar o quarto', 'Estudar', 'Fazer os Exercícios', 'Fazer os Projetos', 'Estudar Inglês'];

const accomplish = (arrayOfAppointments) => {
  return (
    arrayOfAppointments.map((appointment) => <li>{appointment}</li>)
  );
};

function App() {
  return (
    <div>
      {Task(appointments.length)}
      <ol>
        {accomplish(appointments)}
      </ol>
    </div>
  );
}

export default App;
