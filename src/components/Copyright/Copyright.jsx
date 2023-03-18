import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Copyright(props) {

  const styles = {
    marginTop: '30px',
    marginBottom: '20px',
  }
  return (
    <Typography sx={styles} variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Guillermo Ojeda. '}
      <Link color="primary" href="https://github.com/guillermoojeda">
        Visit my GitHub 
      </Link>{' '}
    </Typography>
  );
}