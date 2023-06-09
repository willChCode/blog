'use client';

import React, { useState, useEffect } from 'react';
import blogsApi from '@/mocks/blogs.json';
import blogsApiES from '@/mocks/blogs_es.json';
// import Card from '../Card';
// import Title from '../Title';
import { AiFillGithub } from 'react-icons/ai';
import Card from '@/components/Card';
import Title from '@/components/Title';
import { useI18n } from '@/context/i18nContext';
import ProjectsSkeleton from '@/components/skeleton/ProjectsSkeleton';

// const getProjects = async () => {
//   const res = await fetch(blogs)
//   return res.json();
// }
interface ProjectsProps {
  titulo: string;
  descripcion: string;
}

function LoadProjects() {
  const [projects, setProjects] = useState<ProjectsProps[]>([]);
  const apiES = blogsApiES.blogs.projects;
  const apiEN = blogsApi.blogs.projects;
  const { locale } = useI18n();
  console.log(locale);

  useEffect(() => {
    if (locale === 'en') {
      setProjects(apiEN);
    } else {
      setProjects(apiES);
    }
  }, [locale, apiEN, apiES]);

  console.log(projects);
  // const projects = blogsApi.blogs.projects;

  return (
    <div className='flex flex-wrap items-center justify-center gap-5 my-5'>
      {projects.length === 0
        ? Array.from(new Array(4)).map((_, index) => (
            <ProjectsSkeleton key={index} small bordered shadow>
              <h1 className='bg-neutral-300 h-[1.7rem] rounded-md' />
              <p className='bg-neutral-300 h-[4.5rem] rounded-md'>
                <span className='loading loading-spinner text-error'></span>
              </p>
            </ProjectsSkeleton>
          ))
        : projects.map((project, index) => (
            <Card
              key={index}
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
