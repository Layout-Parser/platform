import "./styles/App.scss";
import React from 'react';
import { Nav } from './components';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <div className="App">
        <header className="App-header">
          <p>
            The Layout Parser Open Platform
          </p>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
