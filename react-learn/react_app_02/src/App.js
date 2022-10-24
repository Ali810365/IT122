import React from "react";
import Gallery from './Gallery.js';

/*
You can declare many components in one file, but large files can get difficult to navigate. 
To solve this, you can export a component into its own file, and then import that component from another file:

*/

export default function App() {
  return (
    <Gallery />
  );
}
