
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";


export default function LogoutButton() {

  const navigate = useNavigate();

  function userLogout() {
    window.localStorage.clear();
    navigate("/login");
  }

  return (
    <Button 
      // variant="contained"
      startIcon={<LogoutIcon />}
      // sx={{}}
      onClick={() => userLogout()}
      size="small"
    >
      Logout
    </Button>
  )
}
