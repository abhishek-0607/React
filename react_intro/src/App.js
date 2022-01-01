import "./App.css";

function App() {
  const arr = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const arr2 = ["Samsung", "Apple", "HTC", "Micromax"];

  return (
    <div className="App">
      <h1>Mobile Operating System</h1>
      <List val={arr} />

      <h1>Mobile Manufacturers</h1>
      <List val={arr2} />
    </div>
  );
}
function List({ val }) {
  return (
    <ul>
      {val.map((e) => (
        <li>{e}</li>
      ))}
    </ul>
  );
}

export default App;
