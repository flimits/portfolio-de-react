import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import App from './App';
import Error from './Pages/Error';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Resume from './Pages/Resume';
import Contact from './Pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <About />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
