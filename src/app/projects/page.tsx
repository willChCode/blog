'use client';

import Container from '@/components/Container';
import Title from '@/components/Title';
import React from 'react';
import LoadProjects from './LoadProjects';

function projectsPage() {
  return (
    <Container>
      <div className='flex flex-col items-center gap-8 mt-8 dark:text-white'>
        <Title title='Projects' textBig />
        <LoadProjects />
      </div>
    </Container>
  );
}

export default projectsPage;
