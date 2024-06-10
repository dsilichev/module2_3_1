import { Component } from 'react';
import { InformationLayout } from './InformationLayout';
export class Information extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InformationLayout />
      </div>
    );
  }
}
