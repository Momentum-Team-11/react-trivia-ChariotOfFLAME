import { useEffect, useState } from 'react';

const Correct = ({ currentA, correctA }) => {
  const [correct, setCorrect] = useState(null);
  useEffect(() => {
    if (currentA === correctA) {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }, [currentA, correctA]);

  return (
    <>
      {correct ? (
        <p className='uk-text-center uk-text-large uk-text-success'>Correct!</p>
      ) : (
        <p className='uk-text-center uk-text-large uk-text-danger'>
          Incorrect...
        </p>
      )}
    </>
  );
};

export default Correct;
