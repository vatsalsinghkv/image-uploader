import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className = '' }: Props) => {
  return (
    <button
      className={`bg-text text-white border border-text hover:bg-transparent hover:text-text focus:text-text focus:bg-transparent rounded px-12 py-3 transition-all duration-150 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
