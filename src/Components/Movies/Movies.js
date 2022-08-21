import React from 'react'
import './Movies.css'
function Movies() {
    
  return (
    <>
        <h1>
            All Movies Show in Database
        </h1>
    <div className="aa">
        <table>
            <tr>
                <th>
                    Title
                </th>
                <th>
                    Genre
                </th>
                <th>
                    Stock
                </th>
                <th>
                    Rate
                </th>
            </tr>
            <tr>
                <td>
                    Terminator
                </td>
                <td>
                    Action,Thriller,Funny
                </td>
                <td>
                    6
                </td>
                <td>
                    2.5
                </td>
            <button>
                Delete
            </button>
            </tr>
            <tr>
                <td>
                    I am Legend
                </td>
                <td>
                    Horror,Drama,Funny
                </td>
                <td>
                    5
                </td>
                <td>
                    70
                </td>
                 <button>
                Delete
            </button>
            </tr>
            <tr>
                <td>
                Comedy 
                </td>
                <td>
                    Funny,Thriller
                </td>
                <td>
                    10
                </td>
                <td>
                    100
                </td>
                  <button>
                Delete
            </button>
            </tr>
            <tr>
                <td>
                Action Movie
                </td>
                <td>
                    Funny,Thriller
                </td>
                <td>
                    10
                </td>
                
                <td>
                    100
                </td>
                  <button>
                Delete
            </button>
            </tr>
            <tr>
                <td>
                Horror Movie
                </td>
                <td>
                    Horror,Thriller
                </td>
                <td>
                    20
                </td>
                <td>
                    90
                </td>
                  <button>
                Delete
            </button>
            </tr>
        </table>
    </div>

    </>
  )
}

export default Movies