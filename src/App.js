import './App.css';
import {Link} from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
    
      <header className="App-header">
        Let's get started
        <button  className="launch-btn">
        <Link to="/main">Click Me</Link>
        </button>
      </header>
    </div>
  );
}

export default App;
