import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HostLayout from './components/HostLayout';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVans from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import NotFound from './pages/NotFound';
import VanDetail from './pages/Vans/VanDetail';
import Vans from './pages/Vans/Vans';

import './server/server';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'vans',
        element: <Vans />,
      },
      {
        path: 'vans/:id',
        element: <VanDetail />,
      },
      {
        path: 'host',
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
          },
          {
            path: 'income',
            element: <Income />,
          },
          {
            path: 'reviews',
            element: <Reviews />,
          },
          {
            path: 'vans',
            element: <HostVans />,
          },
          {
            path: 'vans/:id',
            element: <HostVanDetail />,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
              },
              {
                path: 'photos',
                element: <HostVanPhotos />,
              },
              {
                path: 'pricing',
                element: <HostVanPricing />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
