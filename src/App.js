
import {useState} from 'react'
import Counter from './redux/reducers/Counter';
function App() {
   
  const [counter, setCounter] = useState(0)


  return (
    <div className="App">
       <Counter/>
    </div> 
  );
}

export default App;
