import { ChildrenProps } from '@/interfaces/interface';
import React from 'react';

function Container({ children }: ChildrenProps) {
  return (
    <div
      className='
        max-w-full
        xl:mx-36
        lg:mx-20
        md:mx-10
        sm:mx-5
        mx-2
        px-[1rem]'>
      {children}
    </div>
  );
}

export default Container;
