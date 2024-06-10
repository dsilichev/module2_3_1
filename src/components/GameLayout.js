import { Information } from './Information';
import { Field } from './Field';
import { Component } from 'react';

export class GameLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Information />
        <Field />
      </div>
    );
  }
}
