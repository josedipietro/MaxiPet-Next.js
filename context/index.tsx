import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { Product } from '../components/ProductList/ProductCard';

type ShoppingCartState = {
  products: Product[];
  addProduct(product: Product): void;
  removeProduct(product: Product): void;
};

const ShoppingCartContext = createContext<ShoppingCartState | null>(null);

const useShoppingCart = (): ShoppingCartState => {
  const context = useContext(ShoppingCartContext);

  if (!context) {
    throw new Error('Use ShoppingCartProvider in parent component');
  }

  return context;
};

type ShoppingCartProviderProps = {
  initProducts?: Product[];
} & PropsWithChildren;

export const ShoppingCartProvider = ({
  children,
  initProducts = [],
}: ShoppingCartProviderProps) => {
  const [products, setProducts] = useState<Product[]>(initProducts);

  const addProduct = (product: Product) => {
    if (products.includes(product)) return;

    setProducts([...products, product]);
  };
  const removeProduct = (product: Product) => {
    if (!products.includes(product)) return;

    const newProducts = products.filter((pro) => product.id !== pro.id);
    setProducts(newProducts);
  };

  return (
    <ShoppingCartContext.Provider
      value={{ products, addProduct, removeProduct }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default useShoppingCart;
