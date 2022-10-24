import React from "react";

/*
Conditional rendering 
Your components will often need to display different things depending on different conditions. 
In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.

In this example, the JavaScript && operator is used to conditionally render a checkmark:
*/


function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Genie's Packing List</h1>
      <ul>
        <Item
          isPacked={true}
          name="Lamb lung"
        />
        <Item
          isPacked={true}
          name="Chicken Patties"
        />
        <Item
          isPacked={false}
          name="Harness"
        />
      </ul>
    </section>
  );
}
