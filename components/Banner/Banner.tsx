import Image from 'next/image';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';

export const Banner = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <HomeSectionLayout style={{ display: 'none' }}>
      <figure className="relative w-full h-[220px] max-h-[220px]">
        <Image className="object-contain" src={image} alt={alt} fill></Image>
      </figure>
    </HomeSectionLayout>
  );
};
