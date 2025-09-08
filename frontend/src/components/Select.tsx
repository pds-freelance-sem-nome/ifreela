'use client';

import { ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  options: Option[];
  placeholder?: string;
  containerClassName?: string;
  triggerClassName?: string;
  contentClassName?: string;
  name?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}

export function Select({
  options,
  placeholder,
  containerClassName,
  triggerClassName,
  contentClassName,
  name,
  defaultValue,
  onValueChange,
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(() => {
    return options.find((opt) => opt.value === defaultValue) || null;
  });
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onValueChange) {
      onValueChange(option.value);
    }
  };

  const baseTriggerClasses =
    'flex h-11 w-full items-center justify-between rounded-lg border border-black bg-transparent py-3 px-4 text-md font-semibold ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 rounded-[15px] h-12';

  const baseContentClasses =
    'absolute z-50 mt-2 w-full min-w-[8rem] overflow-hidden rounded-[15px] border bg-gray-900 text-black shadow-md animate-in fade-in-80';

  return (
    <div
      ref={selectRef}
      className={twMerge('relative w-full rounded-[20px]', containerClassName)}
    >
      <input type="hidden" name={name} value={selectedOption?.value || ''} />

      <button
        type="button"
        className={twMerge(baseTriggerClasses, triggerClassName)}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        <span className={selectedOption ? '' : 'text-muted-foreground'}>
          {selectedOption?.label || placeholder}
        </span>
        <ChevronDown
          className={`h-4 w-4 opacity-80 transition-transform ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={twMerge(baseContentClasses, contentClassName)}
          role="listbox"
        >
          <ul>
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                className="relative flex w-full cursor-pointer select-none items-center py-2 px-4 text-md font-semibold outline-none hover:bg-black/10"
                onClick={() => handleOptionClick(option)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleOptionClick(option);
                  }
                }}
                tabIndex={0}
                aria-selected={selectedOption?.value === option.value}
                role="option"
              >
                {option.label}
              </button>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
