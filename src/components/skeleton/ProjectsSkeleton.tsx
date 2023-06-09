import React from 'react';

interface ProjectChildren {
  children: React.ReactNode;
  small?: boolean;
  bordered?: boolean;
  shadow?: boolean;
}

function ProjectsSkeleton({
  children,
  small,
  bordered,
  shadow
}: ProjectChildren) {
  return (
    <div
      className={` 
      p-3 
      flex 
      flex-col 
      gap-3 
      ${small ? 'w-80' : 'w-full'}
      ${bordered && 'border-[1px]'}
      ${shadow && 'shadow-lg'}`}>
      {children}
    </div>
  );
}

export default ProjectsSkeleton;
