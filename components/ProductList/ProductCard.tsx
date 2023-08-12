import Image from 'next/image';
import { PawIcon, PawLightIcon } from '../../lib';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';

export interface Product {
  name: string;
  price: number;
  image: string;
  rating: number;
  id: number;
}

export const ProductCard = ({ product }: { product: Product }) => {
  const renderRating = () => {
    const pawIcon = <PawIcon></PawIcon>;
    const pawLightIcon = <PawLightIcon></PawLightIcon>;

    const icons = [];

    for (let rateIterator = 1; rateIterator <= 5; rateIterator++) {
      rateIterator <= product.rating
        ? icons.push(<PawIcon key={rateIterator}></PawIcon>)
        : icons.push(<PawLightIcon key={rateIterator}></PawLightIcon>);
    }

    return <>{...icons}</>;
  };

  return (
    <article className="font-header flex max-h-[334px] flex-col justify-center items-center text-left hover:scale-105 transition-all">
      <figure className="mb-2">
        <Image
          className="object-cover"
          width={145}
          height={200}
          src={product.image}
          alt={product.name}
        ></Image>
      </figure>

      <figcaption>
        <p>{product.name}</p>
        <div className="flex">{renderRating()}</div>
        <p>${product.price}</p>
      </figcaption>

      <AddToCartButton product={product}></AddToCartButton>
    </article>
  );
};
