import { Product, ProductCard } from './ProductCard';

export const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full place-items-end grid grid-cols-autofill gap-y-3 md:gap-y-5 lg:gap-y-10">
      {products.map((product) => (
        <ProductCard key={product.name} product={product}></ProductCard>
      ))}
    </div>
  );
};
