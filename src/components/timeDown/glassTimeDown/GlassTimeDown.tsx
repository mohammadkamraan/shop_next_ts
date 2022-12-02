import { FC } from "react";
import { useTimeCountdown } from "../../../hooks/useTimeCountDown";

interface GlassTimeDownComponentProps {
  days: number;
}

interface GlassTimeComponentProps extends GlassTimeDownComponentProps {
  hours: number;
  minutes: number;
  secounds: number;
}

const GlassTime: FC<GlassTimeComponentProps> = ({ days, hours, minutes, secounds }) => {
  return (
    <div className='flex justify-around'>
      <span className='backdrop-filter block backdrop-blur-[12px] shadow-lg rounded-md w-20 h-16 bg-white dark:bg-slate-900 dark:bg-opacity-30 bg-opacity-40 text-slate-800 dark:text-slate-300'>
        <p className='w-8 mx-auto text-center text-xl'>{days} : days</p>
      </span>
      <span className='backdrop-filter block backdrop-blur-[12px] shadow-lg rounded-md w-20 h-16 bg-white dark:bg-slate-900 dark:bg-opacity-30 bg-opacity-40 text-slate-800 dark:text-slate-300'>
        <p className='w-8 mx-auto text-center text-xl'>{hours} : hours</p>
      </span>
      <span className='backdrop-filter block backdrop-blur-[12px] shadow-lg rounded-md w-20 h-16 bg-white dark:bg-slate-900 dark:bg-opacity-30 bg-opacity-40 text-slate-800 dark:text-slate-300'>
        <p className='w-8 mx-auto text-center text-xl'>{minutes} : minutes </p>
      </span>
      <span className='backdrop-filter block backdrop-blur-[12px] shadow-lg rounded-md w-20 h-16 bg-white dark:bg-slate-900 dark:bg-opacity-30 bg-opacity-40 text-slate-800 dark:text-slate-300'>
        <p className='w-8 mx-auto text-center text-xl'>{secounds} : secounds</p>
      </span>
    </div>
  );
};

const GlassTimeDown: FC<GlassTimeDownComponentProps> = ({ days }) => {
  const daysInMilliSecound = days * 24 * 60 * 60 * 1000;

  const nowInMilliSecound = new Date().getTime();

  const intendedDays = nowInMilliSecound + daysInMilliSecound;

  const [day, hour, minute, secound] = useTimeCountdown(intendedDays);

  return <GlassTime days={day} hours={hour} minutes={minute} secounds={secound} />;
};

export default GlassTimeDown;
