import './App.css';
import Counter from './components/counter/counter';
import Header from './containers/header/header';
import TodoUX from './containers/todo-ux/todo-ux';


function App() {
  return (
    <>
      <Header content='Demo React' />
      <main className="App">
        {/* 
        <p>Demo du "state" &gt; Etat local</p>
        <Counter />
        */}
        
        <TodoUX />

      </main>
    </>
  );
}

export default App;
