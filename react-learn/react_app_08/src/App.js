import React from "react";

/*
Responding to events 
React lets you add event handlers to your JSX. 
Event handlers are your own functions that will be triggered in response to user interactions like 
clicking, hovering, focusing on form inputs, and so on.

Built-in components like <button> only support built-in browser events like onClick. 
However, you can also create your own components, and give their event handler props any application-specific names that you like.
*/


export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert('Playing!')}
      onUploadImage={() => alert('Uploading!')}
    />
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onClick={onPlayMovie}>
        Play Movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload Image
      </Button>
    </div>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}
