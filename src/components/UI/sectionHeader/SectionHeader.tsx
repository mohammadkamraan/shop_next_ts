import { FC, ReactNode } from "react";

interface SectionHeaderProps {
  children: ReactNode;
}

const SectionHeader: FC<SectionHeaderProps> = ({ children }) => {
  return (
    <header className='text-slate-700 dark:text-slate-300 py-5 text-center text-4xl'>
      {children}
    </header>
  );
};

export default SectionHeader;
