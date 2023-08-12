import Link from 'next/link';

export const Information = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="text-xl  font-header text-primary-300 font-bold mb-4">
        Información
      </h3>

      <ul className="list-none p-0">
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Formulario de contacto</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Preguntas frecuentes</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Términos y condiciones</Link>
        </li>
        <li className="font-secondary-500 m-1">
          <Link href={'#'}>Política de privacidad</Link>
        </li>
      </ul>
    </section>
  );
};
