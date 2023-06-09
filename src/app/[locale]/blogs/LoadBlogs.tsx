'use client';

import React, { useState, useEffect } from 'react';
import blogsApiEN from '@/mocks/blogs.json';
import Card from '@/components/Card';
import Title from '@/components/Title';
import LabelColor from '@/components/LabelColor';
import blogsApiES from '@/mocks/blogs_es.json';
import { useI18n } from '@/context/i18nContext';
import ProjectsSkeleton from '@/components/skeleton/ProjectsSkeleton';

interface ArticleProps {
  titulo: string;
  fecha: string;
  tecnologias: string[];
  descripcion: string;
}

function LoadBlogs() {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const { locale } = useI18n();
  console.log(locale);
  const apiES = blogsApiES.blogs.articles;
  const apiEN = blogsApiEN.blogs.articles;
  // const articles = blogsApi.blogs.articles;
  useEffect(() => {
    if (locale === 'es') {
      setArticles(apiES);
    } else {
      setArticles(apiEN);
    }
  }, [locale, apiES, apiEN]);

  return (
    <div className='my-4'>
      {articles.length === 0
        ? Array.from(new Array(4)).map((_, index) => (
            <ProjectsSkeleton key={index}>
              <h1 className='bg-neutral-300 h-[2rem] rounded-md' />
              <p className='bg-neutral-300 h-[1rem] rounded-md w-[12rem]' />
              <p className='bg-neutral-300 h-[3rem] rounded-md' />
            </ProjectsSkeleton>
          ))
        : articles.map(article => (
            <Card
              key={article.titulo}
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
    </div>
  );
}

export default LoadBlogs;
