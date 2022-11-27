import { useFormik } from "formik";

import SurveyLayout from "features/survey/surveyLayout";
import Button from "entities/Button";
import Input from "entities/Input";

import styles from "./styles.module.scss";
import InputSelect from "entities/InputSelect";

const educationVariants = [
   "Начальное общее образование",
   "Основное общее образование",
   "Среднее общее образование",
   "Среднее профессиональное образование",
   "Высшее образование",
];

const initialValues = {
   name: "Hello",
   email: "",
   education: null,
   answers: [],
};

const SurveyPersonalInfo = ({ nextStep }: { nextStep: () => void }) => {
   const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues,
      onSubmit: () => {},
   });

   const onSelectChange = (target: { name: string; value: string }) => {
      const { name, value } = target;
      setFieldValue(name, value);
   };

   const onSubmit = async () => handleSubmit();

   return (
      <SurveyLayout>
         <div className={styles.container}>
            <div className={styles.content}>
               <h3 className={styles.title}>Основная информация</h3>
               <div className={styles.formItem}>
                  <Input name="name" value={values.name} onChange={handleChange} label="Имя" />
               </div>
               <div className={styles.formItem}>
                  <Input name="email" value={values.email} onChange={handleChange} label="E-mail" />
               </div>
               <div className={styles.formItem}>
                  <InputSelect
                     label="Образование"
                     name="education"
                     value={values.education}
                     variants={educationVariants}
                     onChange={onSelectChange}
                  />
               </div>
            </div>
            <Button
               text="Далее"
               className={styles.nextButton}
               style={{ "--main-color": "var(--salad-color)" } as any}
               onClick={nextStep}
            />
         </div>
      </SurveyLayout>
   );
};

export default SurveyPersonalInfo;
