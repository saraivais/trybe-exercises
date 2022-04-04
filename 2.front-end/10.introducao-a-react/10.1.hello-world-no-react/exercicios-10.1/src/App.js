import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const taskArray = ['estudar react', 'dormir', 'estudar mais react', 'estudar react de novo', '100% no projeto sistema solar'];

// react já tem um spread embutido~
function App() {
  return (
    <ol>{taskArray.map((elemento) => Task(elemento))}</ol>
  );
}

export default App;
