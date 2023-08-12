import Link from 'next/link';
import { LocationIcon, PetHouseIcon } from '../../lib';
import Image from 'next/image';
import { UserIcon } from '../../lib/icons/UserIcon';
import { ShoppingCart } from '../ShoppingCart/ShoppingCart';

import logo from '../../public/maxipet-logo.png';
import { Nav } from '../Nav/Nav';
import { SearchInput } from './SearchInput';

export const HeaderActions = () => {
  return (
    <section className="pt-4 bg-background-100">
      <div className="w-full flex flex-col md:flex-row justify-around items-center">
        <Image className="w-64 md:w-48" src={logo} alt="MaxiPet Logo"></Image>

        <SearchInput />
        <div className="flex align-center">
          <div className="mx-2 transition-all hover:scale-105">
            <LocationIcon size={24} color="#333333"></LocationIcon>
          </div>
          <div className="mx-2 transition-all hover:scale-105">
            <PetHouseIcon size={24}></PetHouseIcon>
          </div>
          <div className="mx-2 transition-all hover:scale-105">
            <UserIcon size={24}></UserIcon>
          </div>
          <div className="mx-2 transition-all hover:scale-105">
            <ShoppingCart></ShoppingCart>
          </div>
        </div>
      </div>
      <Nav />
    </section>
  );
};
