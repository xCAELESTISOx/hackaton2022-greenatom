export interface IQuizAnswerVariant {
   code: string;
   text: string;
}

export interface IQuiz {
   id: number;
   title: string;
   text: string;
   answerVariants: {
      variants: IQuizAnswerVariant[];
      trueAnswer: {
         title: string;
         text: string;
      };
      wrongAnswer: {
         title: string;
         text: string;
      };
   };
}
