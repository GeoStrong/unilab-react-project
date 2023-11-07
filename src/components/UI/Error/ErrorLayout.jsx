import { Link } from 'react-router-dom';
import './ErrorLayout.scss';
import usePathname from '../../hooks/usePathname';

const ErrorLayout = ({ error }) => {
  const { pathname } = usePathname();
  const account = JSON.parse(window.localStorage.getItem('account'));
  console.log(pathname);

  let title = 'An error occured';
  let message = 'Something went wrong';

  if (account === null) {
    title = 'Account not found';
    message = 'Please, sign in';
  }

  if (error.status === 500) {
    message = error.data;
  }

  if (error.status === 404) {
    title = 'Not Found';
    message = 'Could not find resource or page';
  }

  return (
    <>
      <div className="error-layout">
        <h2 className="error-layout__text">{title}</h2>
        <p className="error-layout__description">{message}</p>
        <Link to="/" className="error-layout__button">
          {/* <Link to={pathname} className="error-layout__button"> */}
          Go Back
        </Link>
      </div>
    </>
  );
};
export default ErrorLayout;
