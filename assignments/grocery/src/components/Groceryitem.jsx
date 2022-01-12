export const Groceryitem = ({ title, id, deleteItem }) => {
  return (
    <>
      <div>
        {title}
        <button onClick={() => deleteItem(id)}>Delete</button>
      </div>
    </>
  );
};
