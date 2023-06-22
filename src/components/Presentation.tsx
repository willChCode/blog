import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { useTranslations } from 'next-intl';

function Presentation() {
  const t = useTranslations('Index.presentation');

  return (
    <div
      className='
      w-full h-[50vh] flex justify-center items-center flex-col gap-2'>
      <span className='lg:flex text-center text-5xl dark:text-white'>
        <p
          className='mr-4'
          dangerouslySetInnerHTML={{ __html: t.raw('pstGreet') }}
        />
        {/* Hi, I&apos;m */}
        {/* {t.title} */}
        <h1 className='font-bold title'>{t('pstName')}</h1>
      </span>
      <p className='text-xl dark:text-white'>FullStack Web</p>
      <span className='flex gap-4 justify-center items-center [&>a]:dark:text-white'>
        <a
          href='https://www.linkedin.com/in/wilder-chambi-592810272/'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-outline flex gap-2 items-center '>
          <BsLinkedin size={17} />
          Linkedin
        </a>
        <a
          href='https://github.com/willChCode'
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-outline flex gap-2 items-center'>
          <AiFillGithub size={20} />
          Github
        </a>
      </span>
    </div>
  );
}

export default Presentation;
