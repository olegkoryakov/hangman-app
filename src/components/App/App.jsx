import React from 'react';
import Word from '../../containers/Word/Word';
import Controls from '../../containers/Controls/Controls';
import Level from '../../containers/Level/Level';
import Hangman from '../../containers/Hangman/Hangman';

import './app.scss';

const App = () => (
  <div className="app">
    <div className="app__level">
      <Level />
    </div>
    <div className="app__hangman">
      <Hangman />
    </div>
    <div className="app__word">
      <Word />
    </div>
    <div className="app__controls">
      <Controls />
    </div>
  </div>
);

export default App;
