import { HTMLAttributes, useRef, useState } from "react";
import { useClickOutside } from "shared/hooks/useClickOutside";
import styles from "./styles.module.scss";

type Props = {
   value: string | null;
   label: string;
   name: string;
   error?: string;
   variants: string[];
   className?: string;
   onChange: (target: { value: string; name: string }) => void;
} & Omit<HTMLAttributes<HTMLInputElement>, "onChange">;

const InputSelect = ({ value, name, label, variants, error, onChange, className, ...restProps }: Props) => {
   const cn = [styles.input, error ? styles.error : "", value ? styles.active : "", className].join(" ");
   const [isListOpen, setIsListOpen] = useState(false);

   const ref = useRef(null);

   const onClickHandler = (value: string) => {
      onChange({ value, name });
   };

   useClickOutside(ref, () => setIsListOpen(false));

   return (
      <div className={styles.inputWrapper} ref={ref} onClick={() => setIsListOpen(true)}>
         <input value={value || ""} className={cn} readOnly {...restProps} />
         <label className={styles.inputLabel}>{label}</label>
         {error && <div className={styles.inputError}>{label}</div>}
         {isListOpen && (
            <div className={styles.list}>
               {variants.map((item) => (
                  <div key={item} className={styles.listItem} onClick={() => onClickHandler(item)}>
                     {item}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default InputSelect;
