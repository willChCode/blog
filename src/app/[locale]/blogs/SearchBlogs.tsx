'use client';
import React from 'react';

const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

function SearchBlogs() {
  return (
    <form onSubmit={handleSearch} className='mt-4'>
      <input
        type='search'
        placeholder='Search articles...'
        className='w-full border-[1px] p-4 rounded-lg outline-none focus:border-2 focus:border-blue-400'
      />
    </form>
  );
}

export default SearchBlogs;
