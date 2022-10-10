import './App.css';
import Fun from './function/Fun';
import Cls from './class/Cls';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        🏆 ReactJs Beginning to Mastery 🏆
        </p>
        <Fun name='function'/>
        <Cls name="class"/>
      </header>
    </div>
  );
}

export default App;
