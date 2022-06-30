import styles from "./Header.module.scss";
import cookchef from "../assets/images/cat.jpg";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center`}>
      <i class="fa-solid fa-bars mr-15"></i>
      <div className="flex-fill">
        <img
          src="https://github.com/dymafr/react-c5l4/blob/master/src/assets/images/cookchef.png?raw=true"
          alt="logo cookchef"
        ></img>
      </div>
      <ul>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-solid fa-basket-shopping mr-5"></i>
          <span>panier</span>
        </button>
        <button className="btn btn-primary">connexion</button>
      </ul>
    </header>
  );
}

export default Header;
