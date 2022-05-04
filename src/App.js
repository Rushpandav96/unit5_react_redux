import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Todo } from './components/Todo';
import { TodoDetails } from './components/TodoDetails';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/Todos/:id' element={<TodoDetails />}></Route>
        <Route path='/' element={<Todo />}></Route>
      </Routes>
    </div>
  );
}

export default App;
