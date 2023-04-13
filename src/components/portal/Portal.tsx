import { FC, ReactNode } from "react";

import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
  nodeElement: any;
}

const Portal: FC<PortalProps> = ({ children, nodeElement }) => {
  return createPortal(children, nodeElement);
};

export default Portal;
