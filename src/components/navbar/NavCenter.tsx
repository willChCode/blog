'use client';
import Link from 'next/link';
import React from 'react';

function NavCenter() {
  return (
    <div className='navbar-center hidden md:flex '>
      <ul className='menu menu-horizontal text-[#1A202C]'>
        <li>
          <Link className='menu-link' href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/projects'>
            Projects
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/blogs'>
            Blog
          </Link>
        </li>
        <li>
          <Link className='menu-link' href='/resume'>
            Profile
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
