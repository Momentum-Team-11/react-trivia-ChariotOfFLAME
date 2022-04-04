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
    <div className='quiz uk-animation-fade'>
      <h2 className='uk-text-center'>{`${name} Quiz`}</h2>
      <div className='quiz-contents'>
        {questions.map((questionObject, idx) => {
          if (idx === currentQ) {
            return (
              <div
                className={`question-container uk-align-center uk-width-1-3`}
                key={`question-${idx}`}
              >
                <p className='uk-text-center'>{`${count} of ${idx} correct`}</p>
                <h2 className='uk-text-center'>{`Question ${
                  idx + 1
                } of 10`}</h2>
                <p className='uk-text-center'>
                  {decode(`${questionObject.question}`)}
                </p>
                {!results ? (
                  <>
                    <button
                      className='uk-button uk-button-primary uk-button-small uk-flex-center uk-margin-xlarge-left uk-margin-small-right'
                      onClick={() => {
                        setCurrentA('True');
                        setResults(true);
                        setCorrectA(`${questionObject.correct_answer}`);
                      }}
                    >
                      True
                    </button>
                    <button
                      className='uk-button uk-button-danger uk-button-small uk-margin-small-left'
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
                      className='uk-button uk-button-secondary uk-align-center'
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
