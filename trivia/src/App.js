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
      <div>
        <h1>React Trivia</h1>
        <div>
          {selectedCat ? (
            <>
              <Quiz
                name={selectedCat.name}
                id={selectedCat.id}
                key={`quiz-#${selectedCat.id}`}
              />
              <button onClick={() => setSelectedCat(false)}>
                Show all Categories
              </button>
            </>
          ) : (
            <>
              <h2>Pick a Cateogory</h2>
              <ul>
                {categories.map((category, idx) => {
                  return (
                    <div
                      className='cat-tile'
                      onDoubleClick={() => setSelectedCat(category)}
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
