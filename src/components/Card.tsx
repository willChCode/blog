import React from 'react';
import Title from './Title';
import { MdOutlineCalendarMonth } from 'react-icons/md';

interface CardProps {
  title: React.ReactElement;
  line?: boolean;
  body: React.ReactElement;
  bordered?: boolean;
  shadow?: boolean;
  small?: boolean;
  fecha?: string;
  label?: React.ReactElement | React.ReactElement[];
}

function Card({
  body,
  bordered,
  title,
  shadow,
  small,
  fecha,
  label,
  line
}: CardProps) {
  return (
    <div
      className={`
      p-3 flex flex-col gap-3
      ${bordered && 'border-[1px]'}
      ${shadow && 'shadow-lg'}
      ${small ? 'w-80 max-sm:w-full' : 'w-full'}`}>
      {title}
      {line && <hr className='border-gray-300' />}
      {fecha && (
        <div className='dark:text-sky-500'>
          <Title
            icon={MdOutlineCalendarMonth}
            iconSmall
            title={fecha}
            textSmall
          />
        </div>
      )}
      {label && <section className='flex gap-2'>{label}</section>}
      {body}
    </div>
  );
}

export default Card;

// overflow-hidden
// line-clamp-4
// max-h-20
// leading-5
