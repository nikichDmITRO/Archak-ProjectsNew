import './index.scss';

function App() {
const[count,setCount]=useState(0)
const setCountPlus=()=>{
  setCount(count+1)
}
const setCountMinus=()=>{
  setCount(count-1)
}
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>0</h1>
        <button onClick={setCountMinus} className="minus">- Минус</button>
        <button  onClick={setCountPlus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
