import React from 'react';
import PlayersList from './components/PlayersList'

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <PlayersList />
    </div>
  );
}

export default App;
