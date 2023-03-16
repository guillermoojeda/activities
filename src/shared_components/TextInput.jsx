import { useField } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField fullWidth className="text-input" {...field} {...props} sx={{
        paddingBottom: "20px",
      }} 
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

export default TextInput;
