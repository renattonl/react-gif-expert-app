import { useState } from "react";
import { AddGif } from "./components/AddGif";
import { ItemsGifs } from "./components/ItemsGifs";

function App() {
  const [categories, setCategories] = useState([]);
  return (
    <>
      <h1>GifApp</h1>
      <hr />
      <AddGif setCategories={setCategories} />
      <ItemsGifs categories={categories} />
    </>
  );
}

export default App;
