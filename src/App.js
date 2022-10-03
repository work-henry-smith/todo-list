import './App.css';
import TodoList from './todos/TodoList.js';
import NewTodoForm from './todos/NewTodoForm.js';

function App() {
  return (
    <div className="App">
      <NewTodoForm />
      <TodoList />
    </div>
  );
}

export default App;
