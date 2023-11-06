import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const account = JSON.parse(window.localStorage.getItem('account'));

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/form" className="header-left__heading">
          Form
        </Link>
        <Link to="/api" className="header-left__link">
          API
        </Link>
      </div>
      <div className="header-right">
        <h3 className="header-right__name">{account.name}</h3>
        <div className="header-right__profile">
          <img src={account.profile} alt="profile" />
        </div>
      </div>
    </header>
  );
};
export default Header;
