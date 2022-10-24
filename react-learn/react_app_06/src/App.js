import React from "react";

/*
Rendering lists 
You will often want to display multiple similar components from a collection of data. 
You can use JavaScript’s filter() and map() with React to filter and transform your array of data into an array of components.

For each array item, you will need to specify a key. 
Usually, you will want to use an ID from the database as a key. 
Keys let React keep track of each item’s place in the list even if the list changes.
*/


import { dog } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
  const listItems = dog.map(dog =>
    <li key={dog.id}>
      <img
        src={getImageUrl(dog)}
        alt={dog.name}
      />
      <p>
        <b>{dog.name}:</b>
        {' ' + dog.breed + ' '}
        known for {dog.accomplishment}
      </p>
    </li>
  );
  return (
    <article>
      <h1>Dogs</h1>
      <ul>{listItems}</ul>
    </article>
  );
}
