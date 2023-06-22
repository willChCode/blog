'use client';
import { ArticleProps } from '@/app/[locale]/blogs/LoadBlogs';
import { useState, useEffect, createContext, useContext } from 'react';
import blogsApiEN from '@/mocks/blogs.json';
import blogsApiES from '@/mocks/blogs_es.json';
import { useI18n } from '@/context/i18nContext';

interface Article {
  titulo: string;
  fecha: string;
  tecnologias: string[];
  descripcion: string;
  id: string;
  content?: {
    code: string;
    resume: string;
    src: string;
    title1: string;
    desc1: string;
    title2: string;
    desc2: string;
    title3: string;
    desc3: string;
  };
}

interface articlesContextProps {
  articles: Article[];
}

const articlesContext = createContext<articlesContextProps>({ articles: [] });

//hook
export const useArticles = (): articlesContextProps => {
  const context = useContext(articlesContext);

  if (!useArticles) throw new Error('useArticles not exists PROVIDER');
  if (!context) throw new Error('Context is empty');

  return context;
};

type ArticleProviderProps = {
  children: React.ReactNode;
};

export const ArticlesProvider = ({ children }: ArticleProviderProps) => {
  const [articles, setArticles] = useState<ArticleProps[]>([]);
  const { locale } = useI18n();

  const apiES = blogsApiES.blogs.articles;
  const apiEN = blogsApiEN.blogs.articles;

  // console.log(apiEN);
  // console.log(apiES);

  useEffect(() => {
    if (locale === 'es') {
      setArticles(apiES);
    } else {
      setArticles(apiEN);
    }
  }, [locale, apiES, apiEN]);

  // console.log(articles);

  return (
    <articlesContext.Provider value={{ articles }}>
      {children}
    </articlesContext.Provider>
  );
};
