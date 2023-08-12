import Link from 'next/link';

export const Nav = () => {
  return (
    <nav className="w-full pt-4 pb-2 px-4 md:px-16 ">
      <ul className="font-header font-medium text-secondary-600 px-8 w-full flex justify-around items-center list-none p-0">
        <NavLink text={'Inicio'} href={'#'} />
        <NavLink text={'Comprar por marca'} href={'#'} />
        <NavLink text={'Comprar por mascota'} href={'#'} />
        <NavLink text={'Nuestros servicios'} href={'#'} />
        <NavLink text={'Promociones'} href={'#'} />
        <NavLink text={'Nosotros'} href={'#'} />
      </ul>
    </nav>
  );
};

const NavLink = ({ text, href }) => {
  return (
    <li className="transition-all hover:scale-105 text-center mx-2">
      <Link href={href}>
        <p>{text}</p>
      </Link>
    </li>
  );
};
