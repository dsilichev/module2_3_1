import { Component } from 'react';
import { GameLayout } from './components/GameLayout';

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="flex flex-col items-center">
        <h1>Крестики-нолики</h1>
        <GameLayout />
      </div>
    );
  }
}
