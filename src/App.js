import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Nav from './components/Nav/Nav';
import { NavProvider } from './components/Nav//StateManagement/provider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Home />
        <Auth />

        <NavProvider>
          <Nav />
        </NavProvider>

      </header>
    </div>
  );
}

export default App;
