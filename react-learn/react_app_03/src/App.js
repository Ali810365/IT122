import React from "react";

/*
JavaScript in JSX with curly braces 
JSX lets you write HTML-like markup inside a JavaScript file, keeping rendering logic and content in the same place. 
Sometimes you will want to add a little JavaScript logic or reference a dynamic property inside that markup. 
In this situation, you can use curly braces in your JSX to “open a window” to JavaScript:

*/

const person = {
  name: 'Genie',
  theme: {
    backgroundColor: 'blue',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="genie.jpg"
        alt="Genie"
      />
      <ul>
        <li>get treats from BC</li>
        <li>explore dog parks</li>
      </ul>
    </div>
  );
}
