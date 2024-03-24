import { FieldLayout } from './FieldLayout';

export const Field = (props) => {
  console.log(props);
  return (
    <div>
      <FieldLayout {...props}/>
    </div>
  )
}
