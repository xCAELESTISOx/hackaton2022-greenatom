import { ChangeEvent, forwardRef, HTMLAttributes } from "react";

import styles from "./styles.module.scss";

type Props = {
   name: string;
   value?: string | number;
   label: string;
   error?: string;
   required?: boolean;
   className?: string;
   disabled?: boolean;
   onChange: (event: ChangeEvent<HTMLInputElement>) => void;
} & HTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
   const { value, name, className, required, label, error, disabled, onChange, ...restProps } = props;
   const cn = [styles.input, error ? styles.error : "", value ? styles.active : "", className].join(" ");

   return (
      <div className={styles.inputWrapper}>
         <input
            ref={ref}
            type="text"
            name={name}
            id={name}
            value={value}
            className={cn}
            onChange={onChange}
            {...restProps}
         />
         <label htmlFor={name} className={styles.inputLabel}>
            {label}
         </label>
         {error && <div className={styles.inputError}>{error}</div>}
      </div>
   );
});

export default Input;
