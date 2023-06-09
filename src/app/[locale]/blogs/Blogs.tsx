import React from 'react';
import { RiArticleLine } from 'react-icons/ri';
import LoadBlogs from './LoadBlogs';
import Title from '@/components/Title';

function Blogs() {
  return (
    <div className='flex flex-col gap-3 dark:text-white'>
      <Title
        icon={RiArticleLine}
        title='Latest Articles'
        textBig
        iconBig
        line
      />
      {/* <LabelColor label='Next13' /> */}
      <LoadBlogs />
    </div>
  );
}

export default Blogs;
