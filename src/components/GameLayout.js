import { Information } from './Information';
import { Field } from './Field';

export const GameLayout = (props) => {
  return (
    <div>
      <Information {...props} />
      <Field {...props} />
    </div>
  );
};
