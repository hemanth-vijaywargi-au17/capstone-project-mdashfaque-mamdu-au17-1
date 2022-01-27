import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

import './help.css';

const Help = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main className="questions__answer_main">
      <div className="container__help">
        <h3>Questions and Answers about DEV BLOG</h3>
        <section className="help__info">
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default Help;
