import styles from '../app.module.css';
import { connect } from 'react-redux';
import { Component } from 'react';

export class InformationLayoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.Information}>
        {this.props.isDraw
          ? 'Ничья'
          : (this.props.isWin ? 'Победил ' : 'Ходит ') + this.props.currentPlayer}
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  currentPlayer: state.gameState.currentPlayer,
  isWin: state.gameState.isWin,
  isDraw: state.gameState.isDraw,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
