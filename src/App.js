import { useState } from "react";

const initialFruits = [
  {
    id: "a",
    name: "banana",
    allergicTo: true,
  },
  {
    id: "b",
    name: "mango",
    allergicTo: false,
  },
  {
    id: "c",
    name: "kiwi",
    allergicTo: false,
  },
];

export default function App() {
  const [fruits, setFruits] = useState(initialFruits);

  function handleAllergicTo(id) {
    // const updatedArray = fruits.map((fruit) => {
    //   if (fruit.id === id) {
    //     return { ...fruit, allergicTo: !fruit.allergicTo };
    //   } else {
    //     return fruit;
    //   }
    // });

    const updatedArray = fruits.map((fruit) =>
      fruit.id === id ? { ...fruit, allergicTo: !fruit.allergicTo } : fruit
    );
    setFruits(updatedArray);
  }

  return (
    <>
      <h2>Update a fruit</h2>

      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.id}>
              <p>
                {fruit.name} - id: {fruit.id}
              </p>
              <label htmlFor={fruit.id}>allergic to:</label>
              <input
                id={fruit.id}
                type="checkbox"
                checked={fruit.allergicTo}
                onChange={() => {
                  handleAllergicTo(fruit.id);
                }}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
}
