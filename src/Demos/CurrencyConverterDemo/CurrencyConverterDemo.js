import React from 'react';
import Amount from './Amount';
import Euro from './Euro';
import Pound from './Pound';

const App = () => (
  <div>
    <Amount>
      {(amount) => (
        <div>
          <Euro amount={amount} />
          <Pound amount={amount} />
        </div>
      )}
    </Amount>
  </div>
);

export default App;