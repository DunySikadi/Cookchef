import styles from "./HeaderMenu.module.scss";

function HeaderMenu() {
  return (
    <ul className={`card ${styles.MenuContainer} p-20`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
