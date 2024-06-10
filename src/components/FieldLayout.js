import styles from '../app.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
export class FieldLayoutContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className={styles.Fields}>
          {this.props.field.map((fieldItem, index) => (
            <div
              key={index}
              className={styles.FieldItem}
              onClick={() => this.props.handleClickCell(index)}
            >
              {fieldItem}
            </div>
          ))}
        </div>
        <div className={styles.ButtonWrapper}>
          <button onClick={this.props.handleNewGameButton}>Начать заново</button>
        </div>
      </>
    );
  }
}

export const mapStateToProps = (state) => ({
  field: state.fieldState.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);

FieldLayout.propTypes = {
  handleClickCell: PropTypes.func,
  handleNewGameButton: PropTypes.func,
};
