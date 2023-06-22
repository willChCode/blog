'use client';

import React, { useState, useEffect, use } from 'react';
import Card from '@/components/Card';
import Title from '@/components/Title';
import LabelColor from '@/components/LabelColor';
import { useArticles } from '@/context/articlesContext';
import ProjectsSkeleton from '@/components/skeleton/ProjectsSkeleton';
import { useRouter } from 'next/navigation';

export interface ArticleProps {
  titulo: string;
  fecha: string;
  tecnologias: string[];
  descripcion: string;
  id: string;
}

function LoadBlogs() {
  const router = useRouter();
  const { articles } = useArticles();

  /**pagination */
  const projectsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const indexOfLastProject = (currentPage + 1) * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentArticles = articles.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  console.log(currentArticles);

  const totalPages = Math.ceil(articles.length / projectsPerPage);
  console.log(totalPages);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleLink = (id: string) => {
    router.push(`/blogs/${id}`);
  };

  return (
    <div className='my-4'>
      {articles.length === 0 ? (
        Array.from(new Array(4)).map((_, index) => (
          <ProjectsSkeleton key={index}>
            <h1 className='bg-neutral-300 h-[2rem] rounded-md' />
            <p className='bg-neutral-300 h-[1rem] rounded-md w-[12rem]' />
            <p className='bg-neutral-300 h-[3rem] rounded-md' />
          </ProjectsSkeleton>
        ))
      ) : (
        <>
          {currentArticles.map(article => (
            <Card
              key={article.id}
              actionLink={() => handleLink(article.id)}
              title={<Title title={article.titulo} labelColor />}
              fecha={article.fecha}
              body={
                <p
                  className='
          text-justify line-clamp-3 leading-5 h-[4rem]'>
                  {article.descripcion}
                </p>
              }
              label={
                <div className='flex flex-wrap gap-2'>
                  {article.tecnologias.map(tecnologia => (
                    <LabelColor label={tecnologia} key={tecnologia} />
                  ))}
                </div>
              }
            />
          ))}
          <div className='w-full flex justify-center'>
            <div className='menu menu-horizontal border-[1px]'>
              {Array.from({ length: totalPages }, (_, index) => (
                <li
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`btn btn-ghost ${
                    index === currentPage ? 'btn-active' : ''
                  }`}>
                  {index + 1}
                </li>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default LoadBlogs;
