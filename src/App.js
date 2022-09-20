import './App.css';
import { search } from "./store/actions";
import {fillTable} from './fillTable'


function App(props) {
  let table = fillTable(props);
  const dispatch = props.dispatch
  return (
      <div className="App">
        <div>
          <input onChange={(e) => {dispatch(search(e.target.value))}} value={props.inputData}></input>
        </div>
        <div className='table-container'>
          <div className ='userName'>User name</div>
          <div className='action'>Action</div>
          <div className='createAt'>Created at</div>
        </div>
        {table}
      </div>
  );
}

export default App;

