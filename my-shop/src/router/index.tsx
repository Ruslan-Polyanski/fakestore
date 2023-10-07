import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ProductPage } from '../features/product'; 
import { Filters } from '../features/filters';
import { Content } from '../components/content';


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
            <Content />
          </>
        ),
      },
      {
        path: '/:productId', 
        element: <ProductPage />,
      }
    ]
  }
]);

export { router }