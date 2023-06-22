'use client';
import Container from '@/components/Container';
import React, { useState } from 'react';
import { useArticles } from '@/context/articlesContext';
import LabelColor from '@/components/LabelColor';
// import Image from 'next/image';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { RxCopy, RxCheck } from 'react-icons/rx';

interface BlogProps {
  params: {
    id: string;
  };
}
// atelierSeasideDark

function Blog({ params }: BlogProps) {
  console.log(params.id);
  const [copy, setCopy] = useState<boolean>(false);

  // const Article =
  const { articles } = useArticles();

  const articleByID = articles.filter(article => article.id === params.id);
  console.log(articleByID);

  const codeString = `'use client';
  import Container from '@/components/Container';
  import React from 'react';
  import { useArticles } from '@/context/articlesContext';
  import LabelColor from '@/components/LabelColor';
  import Image from 'next/image';
  import SyntaxHighlighter from 'react-syntax-highlighter';
  import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
  `;

  const handleCopy = (data: string) => {
    navigator.clipboard.writeText(data);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 3000);
  };

  return (
    <Container>
      <div className='py-8'>
        {/* <div className='rounded-md overflow-hidden'>
          <div className='flex justify-between bg-gray-700  px-4 py-1 text-white text-xs items-center'>
            <p className='text-sm'>Example code</p>
            {copy ? (
              <button className='py-1 inline-flex items-center gap-1 text-sm'>
                <RxCheck />
                Copied!
              </button>
            ) : (
              <button
                onClick={handleCopy}
                className='py-1 inline-flex items-center gap-1 text-sm'>
                <RxCopy />
                Copy code
              </button>
            )}
          </div>
          <SyntaxHighlighter
            language='jsx'
            style={atomOneDark}
            customStyle={{ padding: '25px', backgroundColor: '#1F2937' }}>
            {codeString}
          </SyntaxHighlighter>
        </div> */}
        {/* <div className='bg-gray-800 p-4 rounded'>
          <pre className='text-white'>
            <code className='italic'>{`// visualizar consola`}</code>
            <br />
            <code>console.log(&quot;Hola mundo&quot;);</code>
          </pre>
        </div> */}
        <section className='flex flex-col gap-2'>
          <h1 className='font-bold text-4xl dark:text-white'>
            {articleByID[0].titulo}
          </h1>
          <p className='italic text-sm'>{articleByID[0].fecha}</p>
          <div className='flex flex-wrap gap-2 '>
            {articleByID[0].tecnologias.map(tecnologia => (
              <LabelColor label={tecnologia} key={tecnologia} />
            ))}
          </div>
        </section>
        <br />
        <section className='flex flex-col gap-8 dark:text-white'>
          <div className='rounded-md overflow-hidden mt-9 mb-8'>
            <div className='flex justify-between bg-gray-700  px-4 py-1 text-white text-xs items-center'>
              <p className='text-sm'>Example code</p>
              {copy ? (
                <button className='py-1 inline-flex items-center gap-1 text-sm'>
                  <RxCheck />
                  Copied!
                </button>
              ) : (
                <button
                  onClick={() => handleCopy(articleByID[0].content?.code!)}
                  className='py-1 inline-flex items-center gap-1 text-sm'>
                  <RxCopy />
                  Copy code
                </button>
              )}
            </div>
            <SyntaxHighlighter
              language='powershell'
              style={atomOneDark}
              customStyle={{ padding: '25px', backgroundColor: '#1F2937' }}>
              {articleByID[0].content?.code!}
            </SyntaxHighlighter>
          </div>
          {/* <Image
            className='m-auto border-[1px]'
            src={articleByID[0].content?.src!}
            width={600}
            height={200}
            alt={articleByID[0].titulo}
          /> */}
          <p className='text-justify'>{articleByID[0].content?.resume}</p>
          <h1 className='font-bold text-2xl'>
            {articleByID[0].content?.title1}
          </h1>
          <p className='text-justify'>{articleByID[0].content?.desc1}</p>
          <h1 className='font-bold text-2xl'>
            {articleByID[0].content?.title2}
          </h1>
          <p className='text-justify'>{articleByID[0].content?.desc2}</p>
          <h1 className='font-bold text-2xl'>
            {articleByID[0].content?.title3}
          </h1>
          <p className='text-justify'>{articleByID[0].content?.desc3}</p>
        </section>
      </div>
    </Container>
  );
}

export default Blog;
