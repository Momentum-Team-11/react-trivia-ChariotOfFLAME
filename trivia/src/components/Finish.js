import { useState, useEffect } from 'react';

const Finish = ({ currentQ, count }) => {
  if (currentQ > 9) {
    return (
      <>
        <h2>Results:</h2>
        <h3>{`You got ${count} of 10 correct!`}</h3>
      </>
    );
  }

  return Finish;
};

export default Finish;
