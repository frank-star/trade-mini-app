import { type PropsWithChildren } from 'react';

import cn from 'classnames';

type TagProps = {
  className?: string;
};

export function Tag({ children, className = '' }: PropsWithChildren<TagProps>) {
  return (
    <div
      className={cn(
        'px-4 py-1.5 bg-surface-light rounded-lg text-white text-xs whitespace-nowrap',
        className,
      )}
    >
      {children}
    </div>
  );
}
