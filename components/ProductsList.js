import Link from 'next/link';
import { wait } from '@/utils';

const ProductsList = async ({ searchParams }) => {
  const { category } = await searchParams;
  const response = await fetch(category
    ? `https://fakestoreapi.com/products/category/${category}` 
    : 'https://fakestoreapi.com/products'
  );
  const products = await response.json();

  await wait(1000);
  
  return (
    <ul>
      { products.map(product => (
        <li key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.title} - {product.price}€
          </Link>
        </li>
      )) }
    </ul>
  )
};

export default ProductsList;