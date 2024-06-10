import { Component } from 'react';
import styles from './app.module.css';
import { GameLayout } from './components/GameLayout';
export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.App}>
        <h1>Крестики-нолики</h1>
        <GameLayout />
      </div>
    );
  }
}
