import styles from "./Header.module.scss";
import HamburgerLink from "./HamburgerLink";
import {
  SidebarMenuItems,
  sidebar_routes
} from "../../../routes-data/sidebar-routes"
import NavigationLinks from "./NavigationLinks/NavigationLinks";

export default function HamburgerNavigation() {
  return (
    <div className={styles.hamburgerNavigation}>
      <nav id="navbar" className={`${styles.flexContainer}`}>
        <ul>
          <li>
            <HamburgerLink location="/" name="Home" />
          </li>
          <NavigationLinks />
          <SidebarMenuItems routes={sidebar_routes} />
        </ul>
      </nav>
    </div>
  );
}
