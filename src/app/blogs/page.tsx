import Container from '@/components/Container';
import Title from '@/components/Title';
import LoadBlogs from './LoadBlogs';
import React from 'react';

function blogsPage() {
  return (
    <Container>
      <div className='flex flex-col items-center gap-8 mt-8 dark:text-white'>
        <Title title='My Blogs' textBig />
        <LoadBlogs />
      </div>
    </Container>
  );
}

export default blogsPage;
