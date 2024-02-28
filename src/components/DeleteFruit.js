import { useState } from "react";

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

export default function DeleteFruit() {
  const [fruits, setFruits] = useState(initialFruits);

  function handleDelete(id) {
    const filteredArray = fruits.filter((fruit) => fruit.id !== id);
    setFruits(filteredArray);
  }

  return (
    <>
      <h2>Delete a fruit</h2>

      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <p>
                {fruit.name} - id: {fruit.id}
              </p>
              <button
                type="button"
                onClick={() => {
                  handleDelete(fruit.id);
                }}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
