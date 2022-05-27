import './App.css';
import Counter from './components/counter/counter';
import Header from './containers/header/header';


function App() {
  return (
    <>
      <Header />
      <main className="App">
        
        <p>Demo du "state" &gt; Etat local</p>
        <Counter />
        
        <p>Liste de taches...</p>

      </main>
    </>
  );
}

export default App;
