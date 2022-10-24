import React from "react";
import { getImageUrl } from './utils.js'

/*
Passing props to a component 

React components use props to communicate with each other. 
Every parent component can pass some information to its child components by giving them props.
 Props might remind you of HTML attributes, but you can pass any JavaScript value through them, 
 including objects, arrays, functions, and even JSX!
*/

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: 'Jindo dog',
          imageId: 'eAwDU1G'
        }}
      />
    </Card>
  );
}

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

