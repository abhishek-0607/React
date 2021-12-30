
import './App.css';
import { Form } from './components/Form';
import { Todo } from './components/Todo';


function App() {
  return (
    <div className="App">
      {<Form/>}
      <Todo/>
    </div>
  );
}

export default App;
