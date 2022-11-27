import { useState } from "react";

import type { IQuestion } from "pages/survey";

import SurveyLayout from "features/survey/surveyLayout";
import InputSelect from "entities/InputSelect";
import Button from "entities/Button";

import styles from "./styles.module.scss";

type Props = {
   question: IQuestion;
   nextStep: () => void;
   onChange: (value: { text: string; result: string }) => void;
};

const SurveyQuestion = ({ question, nextStep, onChange }: Props) => {
   const [isCompleted, setIsCompleted] = useState(false);
   const [value, setValue] = useState<{ text: string; result: string } | null>(null);

   const onVariantClick = (value: string) => {
      setIsCompleted(true);

      const newValue = question.variants.find((item) => item.text === value);
      setValue(newValue!);
      onChange(newValue!);
   };

   const goToNextStep = () => {
      setValue(null);
      setIsCompleted(false);
      nextStep();
   };

   return (
      <SurveyLayout>
         <div className={styles.container}>
            {isCompleted ? (
               <>
                  <div className={styles.title}>{value!.text}</div>
                  <div className={styles.resultText}>{value!.result}</div>
                  <Button className={styles.resultButton} text="Дальше" onClick={goToNextStep} color="#6FB22F" />
               </>
            ) : (
               <>
                  <div className={styles.title}>{question.title}</div>
                  <InputSelect
                     label="Варианты"
                     name={question.title}
                     value={value?.text || null}
                     variants={question.variants.map((i) => i.text)}
                     onChange={(val) => onVariantClick(val.value)}
                  />
               </>
            )}
         </div>
      </SurveyLayout>
   );
};

export default SurveyQuestion;
