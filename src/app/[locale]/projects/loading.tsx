import Container from '@/components/Container';
import Pepe from '@/components/Pepe';
import React from 'react';

function loading() {
  return (
    <Container>
      <div className='w-full h-[70vh] flex flex-col justify-center items-center'>
        <Pepe />
        <p className='italic font-semibold text-sm'>CARGANDO.....</p>
      </div>
    </Container>
  );
}

export default loading;
