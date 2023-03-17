import { useField } from 'formik';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <Box sx={{
      width: '100%',
      paddingBottom: '1rem'
    }}>
      <label htmlFor={props.id || props.name}>{label}</label>
      <TextField fullWidth className="text-input" {...field} {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Box >
  );
};

export default TextInput;
