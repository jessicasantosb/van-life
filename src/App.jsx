import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Error from './components/Error';
import HostLayout from './components/HostLayout';
import Layout from './components/Layout';
import About from './pages/About';
import Home from './pages/Home';
import Dashboard from './pages/Host/Dashboard';
import HostVanDetail, { loader as hostVansDetailLoader } from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVans, { loader as hostVansLoader } from './pages/Host/HostVans';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Login, { loader as loginLoader } from './pages/Login';
import NotFound from './pages/NotFound';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import { requireAuth } from './utils';

import './server/server';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '*',
        element: <NotFound />,
      },
      {
        path: 'login',
        element: <Login />,
        loader: loginLoader,
      },
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
        errorElement: <Error />,
        loader: vansLoader,
      },
      {
        path: 'vans/:id',
        element: <VanDetail />,
        loader: vanDetailLoader,
      },
      {
        path: 'host',
        element: <HostLayout />,
        children: [
          {
            index: true,
            element: <Dashboard />,
            loader: async () => await requireAuth(),
          },
          {
            path: 'income',
            element: <Income />,
            loader: async () => await requireAuth(),
          },
          {
            path: 'reviews',
            element: <Reviews />,
            loader: async () => await requireAuth(),
          },
          {
            path: 'vans',
            element: <HostVans />,
            loader: hostVansLoader,
          },
          {
            path: 'vans/:id',
            element: <HostVanDetail />,
            loader: hostVansDetailLoader,
            children: [
              {
                index: true,
                element: <HostVanInfo />,
                loader: async () => await requireAuth(),
              },
              {
                path: 'photos',
                element: <HostVanPhotos />,
                loader: async () => await requireAuth(),
              },
              {
                path: 'pricing',
                element: <HostVanPricing />,
                loader: async () => await requireAuth(),
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
