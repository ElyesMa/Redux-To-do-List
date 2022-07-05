import './App.css';
import ListTask from './component/ListTask';
import Addtask from './component/Addtask';
import Filter from './component/Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
import source from './Logo.png'


function App() {
  return (
    <div className="App">
      <img src={source} style={{width:300}}></img>
      <Addtask/>
      <Filter/>
      <br/>
      <ListTask/>
    </div>
  );
}

export default App;
