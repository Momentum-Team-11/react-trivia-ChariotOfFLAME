const Categories = (category) => {
  const { name, id } = category;

  return (
    <li>
      <a href='#' id={id}>
        {name}
      </a>
    </li>
  );
};

export default Categories;
