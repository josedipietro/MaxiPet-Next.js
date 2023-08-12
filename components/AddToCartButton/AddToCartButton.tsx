import useShoppingCart from '../../context';
import { ShoppingCartIcon } from '../../lib';
import { Product } from '../ProductList/ProductCard';

export const AddToCartButton = ({ product }: { product: Product }) => {
  const { products, addProduct } = useShoppingCart();

  const handleClick = () => {
    addProduct(product);
  };

  return (
    <button
      onClick={handleClick}
      disabled={products.includes(product)}
      className="add-to-cart-button py-1 px-6 flex justify-center items-center rounded-lg bg-primary-300 text-font-white disabled:bg-neutral-600 hover:bg-primary-400 transition-all"
    >
      <ShoppingCartIcon color="white"></ShoppingCartIcon>
      <p className="ml-2 capitalize">agregar</p>
    </button>
  );
};
