import React from 'react';

const Result = ({word, full, fullHandle}) => (
  <>
    <table>
      <tr>
        <th>Word</th>
        <th>Times</th>
      </tr>
      {word!==undefined && word!==null &&
        word.map((e)=>(
          <tr>
            <td>{e[0]}</td>
            <td>{e[1]}</td>
          </tr>
        )).slice(0, full)
      }
    </table>
    <button onClick={fullHandle}>Show full list</button>
  </>
);

export default Result;
