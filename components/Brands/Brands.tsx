import Image from 'next/image';
import { brands } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { SectionHeader } from '../SectionHeader';

export const Brands = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Trabajamos con las mejores marcas"
      ></SectionHeader>

      <div className="flex w-full mt-4">
        <p className="w-2/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </p>

        <div className="w-3/5 flex justify-between">
          {brands.map((brand) => (
            <figure className="">
              <Image
                width={127}
                height={80}
                key={brand.name}
                src={brand.image}
                alt={brand.name}
              ></Image>
            </figure>
          ))}
        </div>
      </div>
    </HomeSectionLayout>
  );
};
