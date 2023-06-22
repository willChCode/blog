import Container from '@/components/Container';
import Presentation from '@/components/Presentation';
import React from 'react';
import Blogs from './blogs/Blogs';
import Projects from './projects/Projects';

function Home() {
  return (
    <Container>
      <div className='flex flex-col gap-8 mt-8'>
        <Presentation />
        <Projects />
        <Blogs />
      </div>
    </Container>
  );
}

export default Home;
