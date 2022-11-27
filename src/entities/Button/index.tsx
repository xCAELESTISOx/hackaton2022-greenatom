import React, { HTMLAttributes } from "react";
import styles from "./styles.module.scss";

type Props = {
   text: string;
   color?: string;
   disabled?: boolean;
   className?: string;
} & HTMLAttributes<HTMLButtonElement>;

const Button = ({ text, color = "white", disabled, className, onClick, ...restProps }: Props) => {
   const cn = [styles.button, disabled ? styles.disabled : "", className].join(" ");

   return (
      <button style={color ? ({ "--main-color": color } as any) : {}} {...restProps} className={cn} onClick={onClick}>
         {text}
      </button>
   );
};

export default Button;
