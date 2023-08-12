import Image from 'next/image';

import dogImage from '../../public/dog_image.png';

export interface CategorieCardProps {
  categorieName: string;
  categorieImage?: string;
}

export const CategorieCard = ({
  categorieName,
  categorieImage,
}: CategorieCardProps) => {
  return (
    <figure className="flex flex-col justify-center items-center p-4">
      <Image
        width={160}
        height={149}
        src={categorieImage ?? dogImage}
        alt={categorieName}
      />
      <p className="text-lg font-semibold ">{categorieName}</p>
    </figure>
  );
};
