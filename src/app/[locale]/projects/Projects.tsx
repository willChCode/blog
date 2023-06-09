'use client';

import React from 'react';
import LoadProjects from './LoadProjects';
import Title from '@/components/Title';
// import Title from '../Title';

function Projects() {
  return (
    <div className='flex flex-col gap-3 dark:text-white'>
      <Title title='Main Projects' textBig iconBig line textCenter />
      {/* <Card parrafo='loremsd sads' bordered /> */}
      <LoadProjects />
    </div>
  );
}

export default Projects;
