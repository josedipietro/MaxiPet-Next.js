import { LocationIcon } from '../../lib';
import { locations } from '../../lib/constants';

export const LocationsSelect = () => {
  return (
    <div className="flex items-center">
      <div className="mr-2">
        <LocationIcon></LocationIcon>
      </div>
      <select
        className="bg-transparent border-0 py-0 font-header text-font-white focus:border-0 selected:border-0 focus:shadow-none focus:ring-transparent"
        name="location"
        id="locations-id"
      >
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
    </div>
  );
};
