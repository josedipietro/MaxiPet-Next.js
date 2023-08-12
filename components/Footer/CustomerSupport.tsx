import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../lib';

export const CustomerSupport = ({ className }) => {
  return (
    <section className={className}>
      <h3 className="text-xl  font-header text-primary-300 font-bold mb-4">
        Atención al cliente
      </h3>

      <ul className="list-none p-0">
        <li className="font-secondary-500 m-1">
          Bello Monte, calle XXXX, local 1
        </li>
        <li className="font-secondary-500 m-1">(0212) 575 54 12</li>
        <li className="font-secondary-500 m-1">soporte@maxipet.com</li>
        <li className="font-secondary-500 m-1">Lunes a Viernes</li>
        <li className="font-secondary-500 m-1">9:00a.m. - 5:00p.m.</li>
        <li className="flex m-1">
          <div className="mr-2">
            <InstagramIcon color="#867D77"></InstagramIcon>
          </div>
          <div className="mr-2">
            <TwitterIcon color="#867D77"></TwitterIcon>
          </div>
          <div>
            <FacebookIcon color="#867D77"></FacebookIcon>
          </div>
        </li>
      </ul>
    </section>
  );
};
