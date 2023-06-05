'use client';

import React from 'react';
import blogsApi from '@/mocks/blogs.json';
// import Card from '../Card';
// import Title from '../Title';
import { AiFillGithub } from 'react-icons/ai';
import Card from '@/components/Card';
import Title from '@/components/Title';

// const getProjects = async () => {
//   const res = await fetch(blogs)
//   return res.json();
// }

function LoadProjects() {
  const projects = blogsApi.blogs.projects;

  return (
    <div className='flex flex-wrap items-center justify-center gap-5 my-5'>
      {projects.map(project => (
        <Card
          key={project.titulo}
          title={<Title title={project.titulo} iconEnd={AiFillGithub} />}
          body={
            <p
              className='
            text-justify line-clamp-3 leading-5 h-[4rem]'>
              {project.descripcion}
            </p>
          }
          bordered
          shadow
          small
        />
      ))}
    </div>
  );
}

export default LoadProjects;
