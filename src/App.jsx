import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Landing from './components/UI/Landing/Landing';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [],
  },
]);
const App = () => <RouterProvider router={router} />;

export default App;
