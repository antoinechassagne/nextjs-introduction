export const GET = async (request, { params }) => {
  const { category } = await params;
  const res = await fetch(`https://fakestoreapi.com/products/category/${encodeURIComponent(category)}`);
  const products = await res.json();
 
  return Response.json(products);
}
