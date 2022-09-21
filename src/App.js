import './App.css';
import { Link, Route } from "wouter";
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
  return (
    <StaticContext.Provider value={{ name: 'ikko', headshot: true }}>
      <div className="App">
        <section className="App-content">
          <Link to='/'><img className='App-logo' alt='Giffy logo' src='http://www.sunimprint.com/images/Atlanta%20Falcons%20Anime%20Logo%20iron%20on%20transfers.png' /></Link>
          <GifsContextProvider>
            <Route path="/" component={Home} />
            <Route path='/search/:keyword' component={SearchResults} />
            <Route path='/gif/:id' component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
