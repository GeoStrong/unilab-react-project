import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RouteLayout from './pages/Route';
import RegistrationPage from './pages/Authorization';
import Landing from './components/Landing/Landing';
import ErrorPage from './pages/Error';
import FormPage from './pages/Form';

const router = createBrowserRouter([
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
    ],
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
