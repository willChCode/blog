import React from 'react';
import Title from './Title';
import { MdOutlineCalendarMonth } from 'react-icons/md';
import Link from 'next/link';

interface CardProps {
  title: React.ReactElement;
  line?: boolean;
  body: React.ReactElement;
  bordered?: boolean;
  shadow?: boolean;
  small?: boolean;
  fecha?: string;
  label?: React.ReactElement | React.ReactElement[];
  href?: string;
  actionLink?: () => void;
}

function Card({
  body,
  bordered,
  title,
  shadow,
  small,
  fecha,
  label,
  line,
  href,
  actionLink
}: CardProps) {
  // const WrapperComponent = href ? 'a' : React.Fragment;

  return (
    <>
      {href ? (
        <a href={href} target='_blank'>
          <div
            onClick={actionLink}
            className={`
            p-3 flex flex-col gap-3 cursor-pointer
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
        </a>
      ) : (
        <div
          onClick={actionLink}
          className={`
            p-3 flex flex-col gap-3 cursor-pointer
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
      )}
    </>
  );
}

export default Card;

// overflow-hidden
// line-clamp-4
// max-h-20
// leading-5
