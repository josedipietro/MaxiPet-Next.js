import Image from 'next/image';

import logo from '../../public/maxipet-logo.png';
import { InfoSection } from './InfoSection';
import { LocationIcon, PetHouseIcon } from '../../lib';
import { UserIcon } from '../../lib/icons/UserIcon';
import { ShoppingCart } from '../';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="shadow-md z-10">
      <InfoSection />
      <section className="w-screen pt-4 bg-background-100">
        <div className="w-full flex justify-around items-center">
          <Image className="w-48" src={logo} alt="MaxiPet Logo"></Image>
          <input
            placeholder="Buscador"
            className="font-header placeholder:text-secondary-300 border-secondary-200 rounded-lg w-3/12 py-0 h-12 focus:border-primary-300 focus:shadow-md focus:ring-primary-300"
            type="search"
          />
          <div className="flex align-center">
            <div className="mx-2">
              <LocationIcon size={24} color="#333333"></LocationIcon>
            </div>
            <div className="mx-2">
              <PetHouseIcon size={24}></PetHouseIcon>
            </div>
            <div className="mx-2">
              <UserIcon size={24}></UserIcon>
            </div>
            <div className="mx-2">
              <ShoppingCart></ShoppingCart>
            </div>
          </div>
        </div>
        <nav className="w-full pt-4 pb-2 px-16 ">
          <ul className="font-header font-medium text-secondary-600 px-8 w-full flex justify-around items-center list-none p-0">
            <li>
              <Link href="#">
                <p>Inicio</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Comprar por marca</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Comprar por mascota</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Nuestros servicios</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Promociones</p>
              </Link>
            </li>
            <li>
              <Link href="#">
                <p>Nosotros</p>
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
