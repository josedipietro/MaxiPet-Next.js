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

      <div className="flex w-full mt-8 ">
        <p className="w-2/5 font-body md:pr-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
          viverra fames sed.
        </p>

        <div className="w-3/5 flex justify-between">
          {brands.map((brand) => (
            <figure key={brand.name} className="">
              <Image
                width={127}
                height={80}
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
