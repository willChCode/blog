import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';

function Presentation() {
  return (
    <div
      className='
      w-full h-[50vh] flex justify-center items-center flex-col gap-2'>
      {/* <h1 className='font-bold text-6xl title text-center'>
        Hi, I&apos;m Wilder Chambi
      </h1> */}
      <span className='flex  items-center text-4xl gap-2 dark:text-white'>
        Hi, I&apos;m
        <h1 className='font-bold title'>Wilder Chambi</h1>
      </span>
      <p className='text-xl dark:text-white'>FullStack Web</p>
      <span className='flex gap-4 justify-center items-center [&>a]:dark:text-white'>
        <a href='#' className='btn btn-outline flex gap-2 items-center '>
          <BsLinkedin size={17} />
          Linkedin
        </a>
        <a href='#' className='btn btn-outline flex gap-2 items-center'>
          <AiFillGithub size={20} />
          Github
        </a>
      </span>
    </div>
  );
}

export default Presentation;
