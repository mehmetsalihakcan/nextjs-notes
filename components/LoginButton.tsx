import React from "react";

interface LoginButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: ()=> void;
}
const LoginButton = ({children,fullWidth,type,onClick}: LoginButtonProps) => {
  return (
    <button
      className={`p-3 bg-cyan-800 hover:bg-cyan-950 shadow-lg transition rounded-lg text-white ${fullWidth && "w-full"}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default LoginButton;
