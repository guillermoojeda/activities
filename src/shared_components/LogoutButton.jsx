
import Button from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";
import { settings } from '../config/config';
import { clearActivities } from '../store/slices/activities';
import { clearUserInfo } from '../store/slices/user';


export default function LogoutButton() {

  const navigate = useNavigate();

  function userLogout() {
    if (settings.usingRedux) {
      clearActivities();
      clearUserInfo();
    }
    if (settings.usingLocalStorage) { window.localStorage.clear(); }
    // navigate("/login");
  }

  return (
    <Button 
      startIcon={<LogoutIcon />}
      onClick={() => userLogout()}
      size="small"
    >
      Logout
    </Button>
  )
}
