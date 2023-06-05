import { TitleProps } from '@/interfaces/interface';
import React, { ReactElement } from 'react';
import LabelColor from './LabelColor';

function Title({
  title,
  icon: Icon,
  textBig,
  textSmall,
  textCenter,
  iconBig,
  iconSmall,
  iconEnd: IconEnd,
  labelColor,
  line
}: TitleProps) {
  //   const sizeText = {
  //     small: 'text-md',
  //     medium: 'text-lg',
  //     large: 'text-xl',
  //     big: 'text-2xl'
  //   };
  //   const textSize = sizeText[size] || 'text-md';

  return (
    <div>
      <span
        className={`flex gap-3 items-center ${textCenter && 'justify-center'}`}>
        {Icon && <Icon size={iconBig ? 40 : iconSmall ? 20 : 25} />}
        <h1
          className={`
        font-bold
        ${textBig ? 'text-2xl' : textSmall ? 'text-sm' : 'text-xl'}`}>
          {title}
        </h1>
        {IconEnd && <IconEnd size={iconBig ? 40 : iconSmall ? 20 : 30} />}
        {labelColor && <LabelColor label='NEW!' />}
      </span>
      {line && <hr className='bg-gray-300 mt-4' />}
    </div>
  );
}

export default Title;
