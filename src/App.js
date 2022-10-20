import './App.css';
import './components/header'
import header from './components/header';
import today from './ui/today/today';

function App() {
  return (
    <div class="App">
      {header()}
      {today()}
    </div>
  );
}

export default App;
