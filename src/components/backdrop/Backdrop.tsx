import { Dispatch, SetStateAction } from "react";

interface componentProps {
  show: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  setCloseMenu: Dispatch<SetStateAction<boolean>>;
}

const Backdrop = ({ show, setClose, setCloseMenu }: componentProps) => {
  return (
    <div
      onClick={() => {
        setClose(false);
        setCloseMenu(false);
      }}
      className={`md:hidden fixed top-0 bottom-0 left-0 right-0 bg-neutral-700 bg-opacity-50 ${!show && "hidden"}`}
    />
  );
};

export default Backdrop;
