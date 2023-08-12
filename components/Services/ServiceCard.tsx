import Image from 'next/image';

export interface Service {
  name: string;
  description: string;
  image: string;
}

export const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <article className="w-1/3 font-body pr-4 mt-8 text-font-black">
      <figure>
        <Image
          width={80}
          height={80}
          src={service.image}
          alt={service.name}
        ></Image>
      </figure>
      <figcaption className="w-full">
        <h4 className="font-bold front-header text-lg">{service.name}</h4>
        <p className="text-justify md:pr-8">{service.description}</p>
      </figcaption>
    </article>
  );
};
