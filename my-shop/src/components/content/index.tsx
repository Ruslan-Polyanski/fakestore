import { Products } from '../../features/products';
import { LimitProducts } from '../../features/limitProducts';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const showFilters = (state: RootState) => state.filters.invisible;

const Content = () => {

  const isVisibleFilters = useSelector(showFilters);

  console.log('Content')
 
  return (
    <>
      { isVisibleFilters ? <Products /> : <LimitProducts /> }
    </>
  )   
};

export { Content }