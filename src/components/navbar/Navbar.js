import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useAuth } from "../../hooks/useAuth";

import styles from "./Navbar.module.css";

export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuth();
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>

        {!user && (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </>
        )}

        {user && (
          <>
            <li> hello, {user.displayName}</li>
            <li>
              <button className="btn" onClick={logout}>
                Log Out
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
