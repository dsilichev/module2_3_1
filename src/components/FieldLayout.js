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
        <div className="fields">
          {this.props.field.map((fieldItem, index) => (
            <div
              key={index}
              className="fieldItem"
              onClick={() => this.props.handleClickCell(index)}
            >
              {fieldItem}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center">
          <button className='border-solid border border-black px-5 rounded-sm' onClick={this.props.handleNewGameButton}>Начать заново</button>
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
