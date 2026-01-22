import { wait, error } from '@/utils';

const Products = async ({ params }) => {
  console.log('Hello from product page');
  const { id } = await params;

  const response = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await response.json();

  // await wait(1000);

  // error();

  return (
    <>
      <h3>{product.title}</h3>
      <p>{product.price}€</p>
    </>
  );
}

export default Products;
