import React from 'react';

interface labelType {
  title: string;
  bgColor: string;
}

function Label({ title, bgColor }: labelType) {
  return (
    <label
      className={`${bgColor} px-2 py-[2px] rounded-md text-sm dark:text-black`}>
      {title}
    </label>
  );
}

export default Label;
