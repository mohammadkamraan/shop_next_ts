import Link from "next/link";
import { FC } from "react";

interface AccountModeProps {
  text: string;
  destination: string;
  to: string;
}

const AccountMode: FC<AccountModeProps> = ({ destination, text, to }) => {
  return (
    <div className='my-5'>
      <Link href={to}>
        <a className='text-slate-700 dark:text-slate-400 text-lg'>
          {text}
          <span className='text-sky-400'>{destination}</span>
        </a>
      </Link>
    </div>
  );
};

export default AccountMode;
