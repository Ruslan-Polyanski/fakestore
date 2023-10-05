import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Products } from '../features/products';
import { ProductPage } from '../features/product'; 
import { LimitProducts } from '../features/limitProducts';
import { Filters } from '../features/filters';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Filters />
            <Products />
          </>
        ),
      },
      {
        path: '/limit',
        element: (
          <>
            <Filters />
            <LimitProducts />
          </>
        )
      },
      {
        path: '/:productId', 
        element: <ProductPage />,
      }
    ]
  }
]);

export { router }