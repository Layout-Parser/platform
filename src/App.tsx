import "./styles/App.scss";
import React from 'react';
import { Nav, NavRoute } from './components';

const NAVROUTES: NavRoute[] = [
  {
      path: 'https://layout-parser.github.io/tutorials.html',
      label: 'Tutorials',
  },
  {
      path: 'https://layout-parser.readthedocs.io/en/latest/',
      label: 'Docs',
  },
  {
    path: '/',
    label: 'Open Platform',
  },
  {
      path: 'https://join.slack.com/t/layout-parser/shared_invite/zt-ohjd14k1-OrJ2HltwVRGrxhLeHMfW_w',
      label: 'Discussion',
  },
];

function App() {
  return (
    <React.Fragment>
      <Nav routes={NAVROUTES} />
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
