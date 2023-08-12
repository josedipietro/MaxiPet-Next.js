import Link from 'next/link';
import { LocationIcon, PetHouseIcon } from '../../lib';
import Image from 'next/image';
import { UserIcon } from '../../lib/icons/UserIcon';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

import logo from '../../public/maxipet-logo.png';
import { Nav } from '../Nav/Nav';

export const HeaderActions = () => {
  return (
    <section className="pt-4 bg-background-100">
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
      <Nav />
    </section>
  );
};
