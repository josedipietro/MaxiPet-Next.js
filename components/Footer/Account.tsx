import Link from 'next/link';

export const Account = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="text-xl  font-header text-primary-300 font-bold mb-4">
        Mi cuenta
      </h3>

      <ul className="list-none p-0">
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Información personal</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Direcciones</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Mascotas</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Órdenes</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Agenda</Link>
        </li>
      </ul>
    </section>
  );
};
