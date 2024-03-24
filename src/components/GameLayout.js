import { Information } from './Information';
import { Field } from './Field';

export const GameLayout = (props) => {
  //console.log(props.currentPlayer);
  return (
    
    <div>
      <Information {...props}/>
      <Field {...props}/>
    </div>
  )
}
