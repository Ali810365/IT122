import React from "react";

/*
 built from isolated pieces of UI called components. 
 A React component is a JavaScript function that you can sprinkle with markup. 
 Components can be as small as a button, or as large as an entire page. 
 Here is a Gallery component rendering three Profile components:
*/

function Profile() {
  return (
    <img
      src="genie.jpg"
      alt="Genie"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Genie Jindo</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
