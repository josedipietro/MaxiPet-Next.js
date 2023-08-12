import { FacebookIcon, InstagramIcon, TwitterIcon } from '../../lib/icons';
import { LocationsSelect } from './LocationsSelect';

export const InfoSection = () => {
  return (
    <section className="bg-primary-300 px-8 py-2 flex flex-row-reverse items-center">
      <div className="mx-2">
        <FacebookIcon />
      </div>
      <div className="mx-2">
        <TwitterIcon />
      </div>
      <div className="mx-2">
        <InstagramIcon />
      </div>
      <LocationsSelect />
    </section>
  );
};
