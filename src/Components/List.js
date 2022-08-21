import React from 'react'
import './List.css';
import { Link } from "react-router-dom";
function List() {
  return (
    <>
    <h1>
      Movies Application
    </h1>
    <div>
        <ul className='main'>
          <li>
          <Link to="/">
     All Movies
    </Link>
    </li>
             <li>
                  <Link to="Action">
                    Actions
                  </Link>
                </li>
                <li>
                   <Link to="Comedy">
                    Comedy
                  </Link>
                </li>
                <li>
                  <Link to="Thriller">
                    Thriller
                  </Link>
                  </li>
               
        </ul>
    </div>
    </>
  )
}
export default List