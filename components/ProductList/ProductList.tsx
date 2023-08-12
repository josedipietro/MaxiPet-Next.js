import { Product, ProductCard } from './ProductCard';

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full grid grid-cols-autofill gap-y-10">
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
};
