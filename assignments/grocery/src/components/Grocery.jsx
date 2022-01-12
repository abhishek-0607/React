import { Groceryinput } from "./Groceryinput";
import { Groceryitem } from "./Groceryitem";
import { nanoid } from "nanoid";
import { useState } from "react";

export const Grocery = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log("Data in parent: ", data);
    const payload = {
      title: data,
      id: nanoid(7),
    };
    setList([...list, payload]);
  };
  const deleteItem = (id) => {
    setList((list) => list.filter((e) => e.id !== id));
  };

  return (
    <>
      <Groceryinput getData={handleClick} />
      {list.map((e) => (
        <Groceryitem deleteItem={deleteItem} key={e.id} {...e} />
      ))}
    </>
  );
};
