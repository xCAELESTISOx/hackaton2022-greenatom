import { HTMLAttributes } from "react";

import styles from "./styles.module.scss";

type Props = {
   text: string;
   right?: boolean;
   className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Label = ({ text, right, className, ...restProps }: Props) => {
   const cn = [right ? styles.right : "", styles.label, className].join(" ");
   return (
      <div className={right ? styles.labelWrapper : ""}>
         <div className={cn} {...restProps}>
            {text}
         </div>
      </div>
   );
};

export default Label;
