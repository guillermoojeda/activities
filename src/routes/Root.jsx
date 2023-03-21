import {
  Outlet,
  NavLink,
  useNavigation,
} from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import './Root.css';

export default function Root() {
  //border-bottom: 1px solid #e3e3e3;
  const navigation = useNavigation(); // returns "idle", "submitting", "loading"
  return (
    <>
      <div id="sidebar">
        <div>Do Something!!</div>
        <nav>
          <ul>
            <li>
              <NavLink to={'home'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'activities'}>Activities to do</NavLink>
            </li>
            <li>
              <NavLink to={'about'}>About this page...</NavLink>
            </li>
            <li>
              <NavLink to={'/login'} onClick={() => window.localStorage.clear()}>
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
