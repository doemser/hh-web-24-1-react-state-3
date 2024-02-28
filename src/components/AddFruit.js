import { useState } from "react";
import { uid } from "uid";

const initialFruits = [
  {
    id: "a",
    name: "banana",
  },
  {
    id: "b",
    name: "mango",
  },
  {
    id: "c",
    name: "kiwi",
  },
];

export default function AddFruit() {
  const [fruits, setFruits] = useState(initialFruits);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { fruit } = Object.fromEntries(formData);

    console.log(fruit);

    // Does not work, because it is mutating the state
    //fruits.push({ id: uid(), name: fruit });

    const newArray = [...fruits, { id: uid(), name: fruit }];
    setFruits(newArray);
  }

  return (
    <>
      <h2>Creating/Adding a fruit</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" name="fruit" />
        <button type="submit">add fruit</button>
      </form>

      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              {fruit.name} - id: {fruit.id}
            </li>
          );
        })}
      </ul>
    </>
  );
}
