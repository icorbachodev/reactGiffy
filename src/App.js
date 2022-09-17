import './App.css';
import ListOfGifs from './components/ListOfGifs';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGifs keyword="eromanga sensei" />
      </section>
    </div>
  );
}

export default App;
