import React from 'react';
import { BsLinkedin, BsTwitter } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';
import { SiGmail } from 'react-icons/si';

function Footer() {
  return (
    <div className='flex py-[2rem] px-4 justify-center items-center gap-5 dark:text-white'>
      <h2>© 2023 willCh - Dev </h2>
      <span className='flex gap-3'>
        <BsTwitter size={30} color='#1DA1F2' />
        <AiFillGithub
          size={30}
          color='#181717'
          className='dark:bg-white rounded-full'
        />
        <BsLinkedin
          size={30}
          color='#0077B5'
          className='dark:bg-white rounded-lg'
        />
        <SiGmail size={30} color='#DB4437' />
      </span>
    </div>
  );
}

export default Footer;
