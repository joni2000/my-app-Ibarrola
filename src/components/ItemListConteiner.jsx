import { ItemCount } from "./ItemCount";

export const ItemListConteiner = ({ greeting }) => {

  const product = {
    id: 1,
    name: "Notebook Lenovo",
    stock: 10,
    color: "red",
  };

  return (
    <>
      <h1>ItemListConteiner</h1>
      <hr />

      <h3>{greeting}</h3>

      <ItemCount product={ product }/>
    </>
  );
};
