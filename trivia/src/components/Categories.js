const Categories = (category) => {
  const { name, id } = category;

  return (
    <li>
      <h3 id={id}>{name}</h3>
    </li>
  );
};

export default Categories;
