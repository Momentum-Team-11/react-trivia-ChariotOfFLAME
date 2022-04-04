import { useEffect, useState } from 'react';
import axios from 'axios';
import { decode } from 'html-entities';
import Correct from './Correct';
import Finish from './Finish';

const Quiz = ({ name, id }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [currentA, setCurrentA] = useState('');
  const [correctA, setCorrectA] = useState('');
  const [results, setResults] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`use effect for quiz runs. Get API result for ${id}`);
    axios
      .get(`https://opentdb.com/api.php?amount=10&category=${id}&type=boolean`)
      .then((response) => setQuestions(response.data.results));
  }, [id]);

  return (
    <div className='quiz'>
      <h2>{`${name} Quiz`}</h2>
      <div className='quiz-contents'>
        {questions.map((questionObject, idx) => {
          if (idx === currentQ) {
            return (
              <div className={`question-container`} key={`question-${idx}`}>
                <p>{`${count} of ${idx} correct`}</p>
                <h2>{`Question ${idx + 1} of 10`}</h2>
                <p>{decode(`${questionObject.question}`)}</p>
                {!results ? (
                  <>
                    <button
                      onClick={() => {
                        setCurrentA('True');
                        setResults(true);
                        setCorrectA(`${questionObject.correct_answer}`);
                      }}
                    >
                      True
                    </button>
                    <button
                      onClick={() => {
                        setCurrentA('False');
                        setResults(true);
                        setCorrectA(`${questionObject.correct_answer}`);
                      }}
                    >
                      False
                    </button>
                  </>
                ) : (
                  <>
                    <Correct currentA={currentA} correctA={correctA} />
                    <button
                      onClick={() => {
                        if (currentA === correctA) {
                          setCurrentQ(idx + 1);
                          setResults(false);
                          setCount(count + 1);
                        } else {
                          setCurrentQ(idx + 1);
                          setResults(false);
                        }
                      }}
                    >
                      Next Question
                    </button>
                  </>
                )}
              </div>
            );
          }
        })}
        <Finish currentQ={currentQ} count={count} />
      </div>
    </div>
  );
};

export default Quiz;
