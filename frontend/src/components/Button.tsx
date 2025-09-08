import type { ComponentProps } from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'outline';
}

export function Button({
  variant = 'primary',
  className,
  ...props
}: ButtonProps) {
  let baseClassName =
    'flex items-center py-3 px-4 gap-2 rounded-lg font-semibold text-md leading-7 cursor-pointer hover:opacity-90 transition h-12';

  switch (variant) {
    case 'outline':
      baseClassName = twJoin(
        baseClassName,
        'bg-transparent border-1 border-white',
      );
      break;
    default:
      baseClassName = twJoin(baseClassName, 'bg-primary  text-white');
  }

  return <button className={twMerge(baseClassName, className)} {...props} />;
}
