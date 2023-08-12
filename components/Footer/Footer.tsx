import { AboutUS } from './AboutUs';
import { Account } from './Account';
import { Copyright } from './Copyright';
import { CustomerSupport } from './CustomerSupport';
import { Information } from './Information';

export const Footer = () => {
  return (
      <footer className="font-body mt-16 pt-16 bg-background-200">
        <div className="text-secondary-500 w-full flex justify-center">
          <AboutUS className={'w-3/12 px-8'}></AboutUS>
          <Account className={'w-2/12 px-8'}></Account>
          <Information className={'w-2/12 px-8'}></Information>
          <CustomerSupport className={'w-3/12 px-8'}></CustomerSupport>
        </div>

        <Copyright></Copyright>
      </footer>
  );
};
