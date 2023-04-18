import {
  Outlet,
  NavLink,
  useNavigation,
} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { settings } from '../config/config';
import { clearActivities } from '../store/slices/activities';
import { clearUserInfo } from '../store/slices/user';
import { useDispatch } from "react-redux";
import './ProjectRoot.css';

export default function Root() {
  
  const navigation = useNavigation();

  const dispatch = useDispatch();

  function logout() {
    if (settings.usingRedux) {
      dispatch(clearActivities());
      dispatch(clearUserInfo());
    }
    if (settings.usingLocalStorage) { window.localStorage.clear()}
  }

  return (
    <>
      <div id="sidebar">
        <div>Do Something!!</div>
        <nav>
          <ul>
            <li>
              <NavLink to='home'>Home</NavLink>
            </li>
            <li>
              <NavLink to={'activities'}>Activities to do</NavLink>
            </li>
            <li>
              <NavLink to={'about'}>About this page...</NavLink>
            </li>
            <li>
              <NavLink to={'/login'} onClick={logout}>
                <div id="logoutContainer">
                  <LogoutIcon/> <div> Logout</div>
                </div>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div 
        id="outlet"
        className={navigation.state === "loading" ? "loading" : ""}
      >
          <Outlet />
      </div>  
    </>
  );
}
