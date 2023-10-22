import { useEffect } from 'react';
import { getProducts } from './products-slice';
import { useDispatch, useSelector } from 'react-redux'; 
import { AppDispatch, RootState } from '../../store';
import style from './style.module.css';
import { Link } from 'react-router-dom';


type Product = {
  category: string
  description: string,
  id: number,
  image: string,
  price: number,
  title: string,
  rating: {
    count: number,
    rate: number
  }
}


const productsSelector = (state: RootState) => state.products;


const Products = () => {
  
  const allProducts = useSelector(productsSelector);
  const dispatch: AppDispatch = useDispatch();

  console.log('Products')

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <div className={style.products}>
      { allProducts.map((element: Product) => <ProductItem key={element.id} {...element} />)}
    </div>
  )
}

const ProductItem = (props: Product) => {
  return (
    <div className={style.product}>
      <img className={style.img} src={props.image} alt={props.image} />
      <p>Price: {props.price}</p>
      <h5>{props.title}</h5>
      <p>{props.description}</p>
      <p>Category: {props.category}</p>
      <p>Rating: {props.rating.rate}</p>
      <p>Count: {props.rating.count}</p>
      <Link to={`/${props.id}`}>Link</Link>
    </div>
  )
}

export { Products };