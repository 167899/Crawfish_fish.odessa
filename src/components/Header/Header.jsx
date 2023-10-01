import { NavItems } from 'components/NavItems/NavItems';
import logo2 from './logo2.png';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className="container containerFlex">
        <div>
          <img
            width="73px"
            height="82px"
            src={logo2}
            alt="logo"
            className={css.logo2}
          />
        </div>
        <NavItems />
      </div>
    </header>
  );
};
