import { AboutUS } from './AboutUs';
import { Account } from './Account';
import { Copyright } from './Copyright';
import { CustomerSupport } from './CustomerSupport';
import { Information } from './Information';

export const Footer = () => {
  return (
    <footer className="font-body mt-8 pt-8 md:mt-16 md:pt-16 bg-background-200">
      <div className="text-secondary-500 w-full flex justify-center flex-wrap">
        <AboutUS className={'w-full md:w-3/12 px-8 mb-4'}></AboutUS>
        <Account className={'w-full md:w-2/12 px-8 mb-4'}></Account>
        <Information className={'w-full md:w-2/12 px-8 mb-4'}></Information>
        <CustomerSupport
          className={'w-full md:w-3/12 px-8 mb-4'}
        ></CustomerSupport>
      </div>

      <Copyright></Copyright>
    </footer>
  );
};
