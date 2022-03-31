import { useState } from 'react';

const Correct = ({ currentA, correctA }) => {
  const [correct, setCorrect] = useState(false);

  if (currentA === correctA) {
    setCorrect(true);
  } else {
    setCorrect(false);
  }

  return (
    <>
      {correct ? (
        <>
          <p>Correct!</p>n
        </>
      ) : (
        <>
          <p>Incorrect...</p>
        </>
      )}
      )
    </>
  );
};

export default Correct;
