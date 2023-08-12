import { MenuItem } from '@mui/material';
import { Product } from '../ProductList/ProductCard';
import Image from 'next/image';
import DeleteIcon from '@mui/icons-material/Delete';
import useShoppingCart from '../../context';

export const ShoppingCartItem = ({ product }: { product: Product }) => {
  const { removeProduct } = useShoppingCart();

  const handleDelete = () => {
    removeProduct(product);
  };

  return (
    <MenuItem className="flex">
      <figure className="relative w-24 h-16">
        <Image
          className="object-contain"
          src={product.image}
          alt={product.name}
          fill
        />
      </figure>

      <div className="font-body pr-2">
        <p className="text-font-black">{product.name}</p>
        <div className="flex justify-between items-center">
          <p className="text-primary-300">
            <b>${product.price}</b>
          </p>
          <button
            onClick={handleDelete}
            className="border-0 bg-primary-300 p-1 rounded-md"
          >
            <DeleteIcon className="text-font-white" />
          </button>
        </div>
      </div>
    </MenuItem>
  );
};
