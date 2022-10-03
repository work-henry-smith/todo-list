import './App.css';
import TodoList from './todos/TodoList';
import NewTodoForm from './todos/NewTodoForm';

function App() {
  return (
    <div className="App">
      <h2>display please</h2>
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
