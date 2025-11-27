import { type PropsWithChildren, type ButtonHTMLAttributes } from 'react';

import cn from 'classnames';

type ButtonColor = 'default' | 'green' | 'red';
type ButtonVariant = 'gradient' | 'solid' | 'bordered';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  color?: ButtonColor;
  onlyIcon?: boolean;
  wide?: boolean;
}> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = 'solid',
  color = 'default',
  onlyIcon = false,
  wide = false,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const btnStyles = {
    base: 'flex items-center justify-center gap-2 font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
    size: onlyIcon ? 'w-10 h-9 p-0 rounded-lg' : 'px-4 py-1.5 rounded-[10px]',
  };

  return (
    <button
      className={cn(
        btnStyles.base,
        btnStyles.size,
        {
          'w-full': wide,
          'bg-main-gradient-10 text-white px-3 py-2.5 text-xs rounded-xl':
            variant === 'gradient',
          'bg-surface text-white/30 hover:bg-surface-darker hover:text-white':
            color === 'default',
          'bg-success/10 text-success hover:bg-success/20': color === 'green',
          'bg-danger/10 text-danger hover:bg-danger/20': color === 'red',
          'bg-transparent border border-white/10': variant === 'bordered',
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
