import { AvilaTekIcon } from '../../lib/icons/AvilaTekIcon';
import { DogHouseIcon } from '../../lib/icons/DogHouse';
import { TreeIcon } from '../../lib/icons/TreeIcon';

export const Copyright = () => {
  return (
    <>
      <div className="w-full flex justify-between items-end px-16">
        <DogHouseIcon></DogHouseIcon>
        <TreeIcon></TreeIcon>
      </div>
      <div className="w-full py-1 bg-primary-300 flex justify-center items-center text-font-white">
        <p className="mx-1">
          Copyrigth &copy; 2021 Maxi Pet. Todos los derechos reservados.
          Desarrollado por Avila Tek
        </p>
        <AvilaTekIcon></AvilaTekIcon>
      </div>
    </>
  );
};
