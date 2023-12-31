import Image from 'next/image';
import { useEffect, useState } from 'react';
import internal from 'stream';

export interface CarouselProps {
  imageDuration?: number;
  images: CarouselImage[];
}

export interface CarouselImage {
  src: string;
  name: string;
}

export const Carousel = ({ images, imageDuration = 5000 }: CarouselProps) => {
  const [currentImage, setImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setImage(nextImage());
    }, imageDuration);

    return () => clearInterval(interval);
  }, [currentImage]);

  const handleClick = (image: CarouselImage) => {
    setImage(image);
  };

  const nextImage = () => {
    const imageIndex = images.indexOf(currentImage);

    if (imageIndex + 1 === images.length) return images[0];

    return images[imageIndex + 1];
  };

  return (
    <div className="hidden md:block relative w-full h-[580px]">
      <Image
        className="object-cover"
        src={currentImage.src}
        alt={currentImage.name}
        fill
      />

      <ul className="w-1/3 absolute bottom-6 left-1/2 transform -translate-x-1/2 list-none p-0 grid grid-flow-col gap-4 grid-auto-columns">
        {images.map((image) => (
          <li className="w-full" key={image.name}>
            <button
              onClick={() => handleClick(image)}
              style={{
                backgroundColor:
                  image.name === currentImage.name ? '#E2081E' : '#DAD6D3',
              }}
              className="w-full border-0 p-0 rounded-lg bg-primary-300 h-2 mx-4 transition-allduration-700 hover:scale-105"
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
};
