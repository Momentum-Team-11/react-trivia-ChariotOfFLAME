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

  return <>{correct ? <p>Correct!</p> : <p>Incorrect...</p>}</>;
};

export default Correct;
