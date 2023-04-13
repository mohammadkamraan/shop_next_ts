import { FC, ReactNode } from "react";

interface NoteProps {
  children: ReactNode;
}

const Note: FC<NoteProps> = ({ children }) => {
  return (
    <p className='bg-neutral-100 dark:bg-slate-900 py-1 px-2 text-[1rem] text-stone-500 dark:text-stone-300 my-1'>
      {children}
    </p>
  );
};

export default Note;
