import { useState } from "react";

import SurveyLayout from "features/survey/surveyLayout";
import { questions } from "shared/mock/questions";
import SurveyPersonalInfo from "widgets/surveyPersonalInfo";
import SurveyQuestion from "widgets/surveyQuestion";
import { useFormik } from "formik";

const initialValues = {
   name: "Hello",
   email: "",
   education: null,
   answers: [],
};

export interface IQuestion {
   title: string;
   text?: string;
   variants: {
      text: string;
      result: string;
   }[];
}

const SurveyPage = () => {
   const [step, setStep] = useState(0);

   const { values, handleChange, handleSubmit, setFieldValue } = useFormik({
      initialValues,
      onSubmit: () => {},
   });

   const nextStep = () => {
      setStep((prev) => prev + 1);
   };

   const onQuestionChange = (value: { text: string; result: string }) => {
      setFieldValue("variants", value.text);
   };

   if (step === 0) return <SurveyPersonalInfo nextStep={() => setStep(1)} />;
   if (questions[step - 1])
      return <SurveyQuestion question={questions[step - 1]} onChange={onQuestionChange} nextStep={nextStep} />;

   return <SurveyLayout>null</SurveyLayout>;
};

export default SurveyPage;
