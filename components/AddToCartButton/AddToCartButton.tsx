import { ShoppingCartIcon } from '../../lib';
import { Product } from '../ProductList/ProductCard';

export const AddToCartButton = ({ product }: { product: Product }) => {
  return (
    <button className="py-1 px-6 flex justify-center items-center rounded-lg bg-primary-300 text-font-white">
      <ShoppingCartIcon color="white"></ShoppingCartIcon>
      <p className="ml-2 capitalize">agregar</p>
    </button>
  );
};
