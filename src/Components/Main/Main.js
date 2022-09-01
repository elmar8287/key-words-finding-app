import React, {useState} from 'react';


const Main = () => {

  const [value, setValue] = useState("")
  const textAreaHandle = (e) => {
    setValue(e.target.value)
  }

  const [elmar, setElmar] = useState([])
  const findTopThree = () => {
    let a = value
      .toString()
      .replace(/[^\w\s]|_/g, "")
      .replace(/\s+/g, " ")
      .toLowerCase();
    const arr = a.split(' ');
    const map = {};
    arr.forEach(word => {
      map[word] = (map[word] || 0) + 1;
  });

    const res = Array.from(Object.keys(map), key => [key, map[key]]);
    res.sort((a, b) => b[1] - a[1]);
    setElmar([res])
  };
  // const [find, setFind] = useState("Hello")
  // const longLength = () => {
  //   let arr = elmar[0]
  //   let longest = arr.sort(
  //       function (a, b) {
  //           return b.length - a.length;
  //       }
  //   )[0];
  //     setFind(longest)
  // }

  const [full, setFull] = useState(7)
  const fullHandle = () => {
    const length = elmar[0]
    setFull(length.length)
  }

  const clearHandle = () => {
    setValue("")
  }

  return (
    <div>
      <input onChange={textAreaHandle} type="text" value={value}/>
          <button onClick={findTopThree}>Start</button>
          <button onClick={clearHandle}>Clear</button>
          {/* <p>The word with longest length is <span className="long-length">{find}</span> with length equile to

          {elmar[0]!==undefined &&
            <span className="long-length">{find.length}</span>
          }

          </p> */}
          <table>
            <tr>
              <th>Word</th>
              <th>Times</th>
            </tr>
            {elmar[0]!==undefined && elmar[0]!==null &&
              elmar[0].map((e)=>(
                <tr>
                  <td>{e[0]}</td>
                  <td>{e[1]}</td>
                </tr>
              )).slice(0, full)
            }
          </table>
          <button onClick={fullHandle}>Show full list</button>
    </div>
  );
};

export default Main;