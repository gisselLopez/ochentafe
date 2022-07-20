
const Field = () => {
  return (
   <fieldset>
       <label htmlFor={name}>{labelText}</label>
       <input type={type} name={name} id={name} value={value} onChange={onChange} {...rest}/>
   </fieldset>
  );
}
export default Field;