import React from 'react';
import blogsApi from '@/mocks/blogs.json';
import Card from '@/components/Card';
import Title from '@/components/Title';
import LabelColor from '@/components/LabelColor';
// import Card from '../Card';
// import LabelColor from '../LabelColor';
// import Title from '../Title';

function LoadBlogs() {
  const articles = blogsApi.blogs.articles;

  return (
    <div className='my-4'>
      {articles.map(article => (
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
          label={article.tecnologias.map(tecnologia => (
            <LabelColor label={tecnologia} key={tecnologia} />
          ))}
        />
      ))}
    </div>
  );
}

export default LoadBlogs;
