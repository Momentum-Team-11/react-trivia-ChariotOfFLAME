import axios from 'axios';
import { useEffect, useState } from 'react';
import Categories from './components/Categories';

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
          <h2>Pick a Cateogory</h2>
          {selectedCat ? (
            <>
              <h1>hello world!</h1>
              <button onClick={() => setSelectedCat(false)}>
                Show all Categories
              </button>
            </>
          ) : (
            <ul>
              {categories.map((category, idx) => {
                return (
                  <Categories
                    name={category.name}
                    id={category.id}
                    key={category.id}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
