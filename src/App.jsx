import { RouterProvider, createHashRouter } from 'react-router-dom';
import RouteLayout from './pages/Route';
import RegistrationPage from './pages/Authorization';
import Landing from './components/UI/Landing/Landing';
import ErrorPage from './pages/Error';
import FormPage from './pages/Form';
import ApiLayout, { loader } from './pages/Api';

const basename = '/unilab-react-project';

const initialHash = window.location.hash ? window.location.hash : '#/';

const router = createHashRouter([
  {
    path: '/',
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'auth',
        element: <RegistrationPage />,
      },
      {
        path: 'form',
        element: <FormPage />,
      },
      {
        path: 'api',
        element: <ApiLayout />,
        loader,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider
    router={router}
    basename={basename}
    initialEntries={[initialHash]}
  ></RouterProvider>
);

export default App;
