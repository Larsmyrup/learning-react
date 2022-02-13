import './MyButton.css';
import React from "react";

type Props = {
  children?: React.ReactNode;
  className?: String,
  onClick: () => void;
}
const MyButton: React.FC<Props> = ({
                                     children,
                                     onClick,
                                     className,
                                   }) => {
  return (
    <button
      className={`MyButton ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default MyButton;
