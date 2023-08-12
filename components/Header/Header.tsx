import { InfoSection } from './InfoSection';
import { HeaderActions } from './HeaderActions';

const Header = () => {
  return (
    <header className="shadow-md z-10">
      <InfoSection />
      <HeaderActions />
    </header>
  );
};

export default Header;
