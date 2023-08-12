import { useRef, useState } from 'react';
import useShoppingCart from '../../context';
import { ShoppingCartIcon } from '../../lib';
import { Divider, Menu, MenuItem } from '@mui/material';
import { ShoppingCartItem } from './ShoppingCartItem';

export const ShoppingCart = () => {
  const { products } = useShoppingCart();

  const [open, setOpen] = useState(false);

  const ref = useRef<HTMLDivElement>();

  const handleClick = () => {
    setOpen(!open);
  };

  const closeMenu = () => {
    if (open) setOpen(false);
  };

  return (
    <div ref={ref} className="relative">
      <button onClick={handleClick} className="border-0 background-transparent">
        <ShoppingCartIcon size={24}></ShoppingCartIcon>
      </button>

      {products.length > 0 && (
        <div className="absolute -top-1 -right-2 bg-primary-300 rounded-full h-3 w-3"></div>
      )}

      <Menu open={open} anchorEl={ref.current} onClose={closeMenu}>
        {!products.length && (
          <MenuItem>
            <p className="text-secondary-300 px-4">
              <small>
                <i>Aun no has agregado productos</i>
              </small>
            </p>
          </MenuItem>
        )}
        {products.map((product) => (
          <ShoppingCartItem key={product.name} product={product} />
        ))}
        <Divider />
        <MenuItem>
          <div className="font-bold font-body flex px-8">
            <p className="">Total:</p>
            <p className="pl-4 text-primary-300">
              $
              {products
                .map((prod) => prod.price)
                .reduce((prev, current) => prev + current, 0)}
            </p>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
};
