import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends ComponentProps<'input'> {
  icon?: React.ReactNode;
}

export function Input({ className, icon, ...props }: InputProps) {
  const baseClasses =
    'box-border flex gap-2 items-center py-3 px-4 gap-2.5 border border-black rounded-[15px] w-full bg-transparent focus:outline-none focus:ring-2 focus:ring-primary h-12';

  return (
    <div className={twMerge(baseClasses, className)}>
      <input type="text" {...props} className="outline-none flex-1" />
      {icon}
    </div>
  );
}
