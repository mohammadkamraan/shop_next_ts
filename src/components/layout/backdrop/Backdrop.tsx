import { Dispatch, FC, SetStateAction } from "react";

interface componentProps {
  show: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  setCloseMenu: Dispatch<SetStateAction<boolean>>;
}

const Backdrop: FC<componentProps> = ({ show, setClose, setCloseMenu }) => {
  return (
    <div
      role='backdrop'
      onClick={() => {
        setClose(false);
        setCloseMenu(false);
      }}
      className={`md:hidden fixed top-0 w-screen h-screen z-20 bg-neutral-700 bg-opacity-50 overflow-hidden ${
        !show && "hidden"
      }`}
    />
  );
};

export default Backdrop;
