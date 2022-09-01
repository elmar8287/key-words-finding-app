import { Input, Button } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';
import './Text.css';

const { TextArea } = Input;

const Text = (
  { textAreaHandle, value, findTopThree, clearHandle }
  ) => (
  <>
    <TextArea
      value={value}
      onChange={textAreaHandle}
      className="text-area"
      showCount
      maxLength={1000}
    />
    <Button type="primary" onClick={findTopThree} className="button">Start</Button>
    <Button onClick={clearHandle} className="button">Clear</Button>
  </>
);

export default Text;
