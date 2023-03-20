import {
  Outlet,
  NavLink,
  Form,
  redirect,
  useNavigation,
} from "react-router-dom";
import './Root.css';

export default function Root() {
    const navigation = useNavigation(); // returns "idle", "submitting", "loading"
    return (
      <>
        <div id="sidebar">
          {/* <h1>Do Something!!</h1> */}
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
            </ul>
          </nav>

        </div>
        <div 
          id="detail"
          className={navigation.state === "loading" ? "loading" : ""}
        >
            <Outlet />
        </div>  
      </>
    );
  }
