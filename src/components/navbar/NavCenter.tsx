import Link from 'next/link';
// import React from 'react';
import { useTranslations } from 'next-intl';

function NavCenter() {
  const t = useTranslations('Index.navBar');

  return (
    <div className='navbar-center hidden md:flex '>
      <ul className='menu menu-horizontal text-[#1A202C]'>
        <li>
          <Link className='menu-link' href='/'>
            {t('navHome')}
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/projects'>
            {t('navProject')}
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/blogs'>
            {t('navBlog')}
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/resume'>
            {t('navProfile')}
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavCenter;

{
  /* <style jsx>{`
  .menu-item:hover,
  .menu-item:focus {
    background-color: transparent !important;
    outline: none !important;
  }
`}</style> */
}
