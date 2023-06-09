'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoLogoOctocat } from 'react-icons/io';
import { RiMenu4Line } from 'react-icons/ri';

interface NavStartProps {
  home: String;
  project: String;
  blog: String;
  profile: String;
}

function NavStart({ home, project, blog, profile }: NavStartProps) {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className='navbar-start'>
      <div className='md:hidden'>
        <label className='nav-button btn btn-ghost btn-circle' htmlFor='nav1'>
          <RiMenu4Line size={27} />
        </label>
        <input
          id='nav1'
          type='checkbox'
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
          hidden
        />

        <aside className='nav2  bg-white dark:bg-[#1A202C]'>
          <ul className='menu menu-vertical text-[#1A202C] dark:text-white '>
            <li>
              <Link className='menu-link' href='/' onClick={closeMenu}>
                {home}
              </Link>
            </li>
            <li>
              <Link className='menu-link' href='/projects' onClick={closeMenu}>
                {project}
              </Link>
            </li>
            <li>
              <Link className='menu-link' href='/blogs' onClick={closeMenu}>
                {blog}
              </Link>
            </li>
            <li>
              <Link className='menu-link' href='/resume' onClick={closeMenu}>
                {profile}
              </Link>
            </li>
          </ul>
        </aside>
      </div>

      <IoLogoOctocat className='btn btn-ghost btn-circle p-2' />
    </div>
  );
}

export default NavStart;

// <div className='navbar-start'>
//       <div className='dropdown'>
//         <label tabIndex={0} className='btn btn-ghost btn-circle md:hidden'>
//           <RiMenu4Line size={27} />
//         </label>
//         <ul
//           tabIndex={0}
//           className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
//           <li>
//             <a>Home</a>
//           </li>
//           <li>
//             <a>Projects</a>
//           </li>
//           <li>
//             <a>Blogs</a>
//           </li>
//           <li>
//             <a>Resume</a>
//           </li>
//         </ul>
//       </div>

//       <IoLogoOctocat className='btn btn-ghost btn-circle p-2' />
//     </div>
