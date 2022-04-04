import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from './components/Categories';
import Quiz from './components/Quiz';

const App = () => {
  const [categories, setCategories] = useState(['Not available']);
  const [selectedCat, setSelectedCat] = useState(false);

  useEffect(() => {
    axios
      .get('https://opentdb.com/api_category.php')
      .then((response) => setCategories(response.data.trivia_categories));
  }, []);

  return (
    <>
      <div className='uk-container'>
        <h1 className='uk-text-center'>REACT TRIVIA</h1>
        <div className='uk-section uk-section-default uk-animation-fade'>
          {selectedCat ? (
            <>
              <Quiz
                name={selectedCat.name}
                id={selectedCat.id}
                key={`quiz-#${selectedCat.id}`}
              />
              <button
                className='uk-button uk-button-default uk-button-small uk-margin-small-top uk-align-center'
                onClick={() => setSelectedCat(false)}
              >
                Show all Categories
              </button>
            </>
          ) : (
            <>
              <h2 className='uk-text-center'>Pick a Cateogory</h2>
              <ul className='uk-nav uk-flex uk-flex-column uk-align-center uk-flex-center uk-width-1-3'>
                {categories.map((category, idx) => {
                  return (
                    <div
                      className='cat-tile'
                      onClick={() => setSelectedCat(category)}
                    >
                      <Categories
                        name={category.name}
                        id={category.id}
                        key={`cateogry-#${category.id}`}
                      />
                    </div>
                  );
                })}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
