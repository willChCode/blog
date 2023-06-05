'use client';
import React from 'react';
import NavStart from './NavStart';
import NavCenter from './NavCenter';
import NavEnd from './NavEnd';

function NavBar() {
  return (
    <div
      className='navbar pt-7 font-semibold shadow-md dark:text-white
      max-w-[2520px]
      mx-auto
      xl:px-36
      lg:px-20
      md:px-10
      sm:px-5
      px-2'>
      {/* START */}
      <NavStart />
      {/* CENTER */}
      <NavCenter />
      {/* END */}
      <NavEnd />
    </div>
  );
}

export default NavBar;
