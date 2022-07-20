const Finish = ({ currentQ, count }) => {
  if (currentQ > 9) {
    return (
      <>
        <h2 className='uk-text-center'>Results:</h2>
        <h3 className='uk-text-center'>{`You got ${count} of 10 correct!`}</h3>
      </>
    );
  }

  return Finish;
};

export default Finish;
