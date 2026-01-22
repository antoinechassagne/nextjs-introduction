export const GET = async (request, { params }) => {
  const { id } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const products = await res.json();
 
  return Response.json(products);
}
