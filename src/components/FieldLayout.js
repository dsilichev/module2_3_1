export const FieldLayout = (props) => {
  console.log(props.field);
  return (
    <div>
      {props.field.map(fieldItem => <div>{fieldItem}</div>)}
    </div>
  )
}
