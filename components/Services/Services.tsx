import { services } from '../../lib/constants';
import { HomeSectionLayout } from '../../lib/layouts/HomeSectionLayout';
import { SectionHeader } from '../SectionHeader';
import { ServiceCard } from './ServiceCard';

export const Services = () => {
  return (
    <HomeSectionLayout>
      <SectionHeader
        preTitle="Lorem ipsum dolor sit amet."
        title="Nuestros Servicios"
      ></SectionHeader>

      <p className="font-body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In velit ut
        viverra fames sed.
      </p>

      <div className="flex flex-wrap w-full">
        {services.map((service) => (
          <ServiceCard service={service} />
        ))}
      </div>
    </HomeSectionLayout>
  );
};
