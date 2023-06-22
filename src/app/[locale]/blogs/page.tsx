import Container from '@/components/Container';
import Title from '@/components/Title';
import LoadBlogs from './LoadBlogs';
import React from 'react';
import { useTranslations } from 'next-intl';
import SearchBlogs from './SearchBlogs';

function blogsPage() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center gap-8 mt-8 dark:text-white'>
        <span>
          <Title title='My Blogs' textBig textCenter />
          <p className='text-center text-xl mt-1'>
            Welcome to my blog. Here I will write about anything I discover
            related to technology
          </p>
          <SearchBlogs />
        </span>
        <LoadBlogs />
      </div>
    </Container>
  );
}

export default blogsPage;
