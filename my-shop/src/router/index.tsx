import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { Products } from '../features/products';
import { ProductPage } from '../features/product'; 

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Products />,
      },
      {
        path: '/:productId', 
        element: <ProductPage />,
      }
    ]
  }
]);

export { router }