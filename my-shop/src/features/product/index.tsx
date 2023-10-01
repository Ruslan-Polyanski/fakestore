import style from './style.module.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getProductData } from '../product/product-slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

type Product = {
  category?: string
  description?: string,
  id?: number,
  image?: string,
  price?: number,
  title?: string,
  rating?: {
    count?: number,
    rate?: number
  }
}

const productSelector = (state: RootState) => state.product;


const ProductPage = () => {
  const { productId }: any = useParams(); // Доработать типы!!!
  const dispatch: AppDispatch = useDispatch();
  const productData: Product = useSelector(productSelector);

  console.log(productData)

  useEffect(() => {
    dispatch(getProductData(productId))
  }, [dispatch, productId])

  return (
    <div className={style.product}>
      <img className={style.img} src={productData.image} alt={productData.image} />
      <p>Price: {productData.price}</p>
      <h5>{productData.title}</h5>
      <p>{productData.description}</p>
      <p>Category: {productData.category}</p>
      <p>Rating: {productData.rating?.rate}</p>
      <p>Count: {productData.rating?.count}</p>
    </div>
  )
}

export { ProductPage }