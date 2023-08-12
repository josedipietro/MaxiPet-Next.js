import Image from 'next/image';
import catImage from '../public/cat.png';

export const CatImageAside = () => {
  return (
    <aside className="relative w-[440px] h-[708px] hidden lg:block">
      <Image
        className="object-cover"
        src={catImage}
        alt="Gray cat eating"
        fill
      />
    </aside>
  );
};
