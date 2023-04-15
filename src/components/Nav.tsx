import { ReactNode } from 'react';
import { LinkType } from '../utils/types';

const NavLink = ({ children, url }: { children: ReactNode; url: string }) => {
  return (
    <a
      href={url}
      className='relative text-gray-2 after:transition-all after:duration-300 after:absolute after:bg-text after:bottom-0 after:right-0 after:w-0 after:h-[1.5px] hover:after:left-0 hover:after:w-full hover:text-text focus:after:left-0 focus:after:w-full focus:text-text'
    >
      {children}
    </a>
  );
};

const Nav = ({ className = '' }: { className?: string }) => {
  const navLinks: LinkType[] = [
    {
      name: 'illustrations',
      url: '/all',
    },
    {
      name: 'images',
      url: '/my-images',
    },
    {
      name: 'vectors',
      url: '#',
    },
  ];
  return (
    <nav
      className={`capitalize flex flex-col sm:flex-row gap-5 items-center justify-end ${className}`}
    >
      {navLinks.map(({ name, url }) => (
        <NavLink url={url}>{name}</NavLink>
      ))}
    </nav>
  );
};

export default Nav;
