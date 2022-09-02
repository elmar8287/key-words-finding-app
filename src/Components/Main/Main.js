import React, {useState} from 'react';
import Text from '../Text/Text';
import Result from '../Result/Result';
import 'antd/dist/antd.css';
import { Button } from 'antd';

const Main = () => {
  const [display, setDisplay] = useState(false)
  const [value, setValue] = useState("")
  const textAreaHandle = (e) => {
    setValue(e.target.value)
  }

  const [elmar, setElmar] = useState([])
  const findwords = () => {
    if(value) {
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
    }
  };

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
      <h1 className="title">Find your key words </h1>
      <Text textAreaHandle={textAreaHandle} value={value} /> 
      <Button type="primary" onClick={() => {findwords(); setDisplay(true)}} className="button">Start</Button>
      <Button onClick={() => {clearHandle(); setDisplay(false)}} className="button">Clear</Button>
      {
        display && value &&
        <Result word={elmar[0]} full={full} fullHandle={fullHandle} />
      }
    </div>
  );
};

export default Main;
