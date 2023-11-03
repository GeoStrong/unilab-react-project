import { useRouteError } from 'react-router-dom';
import ErrorLayout from '../components/UI/Error/ErrorLayout';

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return <ErrorLayout error={error} />;
};

export default ErrorPage;
