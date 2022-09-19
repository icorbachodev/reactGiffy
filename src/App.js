import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>
        <Link to='/gif/vanitas'>Vanitas no carte</Link>
        <Link to='/gif/leagueoflegends'>Liga de Leyendas</Link>
        <Link to='/gif/anime'>Anime</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
