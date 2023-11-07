import {
  RouterProvider,
  // createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import RouteLayout from './pages/Route';
import RegistrationPage from './pages/Authorization';
import Landing from './components/UI/Landing/Landing';
import ErrorPage from './pages/Error';
import FormPage from './pages/Form';
import ApiLayout, { loader } from './pages/Api';

// const basename = '/unilab-react-project';

const router = createHashRouter([
  // const router = createBrowserRouter([
  {
    path: '/',
    // path: basename,
    element: <RouteLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'auth',
        // path: `${basename}/auth`,
        element: <RegistrationPage />,
      },
      {
        path: 'form',
        // path: `${basename}/form`,
        element: <FormPage />,
      },
      {
        path: 'api',
        // path: `${basename}/api`,
        element: <ApiLayout />,
        loader,
      },
    ],
  },
]);

const App = () => (
  <RouterProvider router={router}></RouterProvider>
  // <RouterProvider router={router} basename={basename}></RouterProvider>
);

export default App;
