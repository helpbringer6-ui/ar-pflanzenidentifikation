import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>AR Pflanzenidentifikation</h1>
        <p>Scanne eine Pflanze, um sie zu identifizieren!</p>
        {/* Hier kommt die AR-Komponente */}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));